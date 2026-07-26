import { Component, HostListener, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Language } from '../../core/services/language';

type ContactField = 'name' | 'email' | 'message' | 'privacy';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
};

type MailResponse = {
  success: boolean;
  error?: string;
};

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly mailUrl = 'http://localhost:8000/send-mail.php';
  readonly contactEmail = 'ahmet_ba@web.de';

  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().contact);

  submitted = false;
  successMessage = false;
  isSending = false;
  sendErrorMessage = '';

  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  onSubmit(): void {
    this.submitted = true;
    this.closeStatus();
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid || this.isSending) {
      return;
    }

    this.sendContactMail(this.createContactPayload());
  }

  closeStatus(): void {
    this.successMessage = false;
    this.sendErrorMessage = '';
  }

  @HostListener('document:keydown.escape')
  closeStatusWithEscape(): void {
    if (this.successMessage || this.sendErrorMessage) {
      this.closeStatus();
    }
  }

  private createContactPayload(): ContactPayload {
    const formData = this.contactForm.getRawValue();

    return {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      honeypot: '',
    };
  }

  private sendContactMail(payload: ContactPayload): void {
    this.isSending = true;
    this.closeStatus();

    this.http.post<MailResponse>(this.mailUrl, payload).subscribe({
      next: (response) => {
        this.isSending = false;

        if (!response.success) {
          this.sendErrorMessage = this.text().sendErrorMessage;
          console.error('Mail delivery failed:', response.error);
          return;
        }

        this.contactForm.reset();
        this.submitted = false;
        this.successMessage = true;
      },

      error: (error) => {
        this.isSending = false;
        this.sendErrorMessage = this.text().sendErrorMessage;
        console.error('Mail request failed:', error);
      },
    });
  }

  isInvalid(field: ContactField): boolean {
    const control = this.contactForm.controls[field];
    return this.submitted && control.invalid;
  }

  isValid(field: ContactField): boolean {
    const control = this.contactForm.controls[field];
    return this.submitted && control.valid;
  }

  successText(): string {
    return this.text().successMessage;
  }

  manualMailUrl(): string {
    const subject = this.lang.current() === 'de'
      ? 'Kontaktanfrage über das Portfolio'
      : 'Portfolio contact request';

    return `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}`;
  }

  errorMessage(field: ContactField): string {
    const control = this.contactForm.controls[field];

    if (!control.errors) return '';

    if (field === 'name') return this.nameErrorMessage();
    if (field === 'email') return this.emailErrorMessage();
    if (field === 'message') return this.messageErrorMessage();
    if (field === 'privacy') return this.text().errors.privacyRequired;

    return '';
  }

  private nameErrorMessage(): string {
    const control = this.contactForm.controls.name;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.nameRequired;
    if (control.hasError('minlength')) return errors.nameMinLength;

    return '';
  }

  private emailErrorMessage(): string {
    const control = this.contactForm.controls.email;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.emailRequired;
    if (control.hasError('email')) return errors.emailInvalid;

    return '';
  }

  private messageErrorMessage(): string {
    const control = this.contactForm.controls.message;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.messageRequired;
    if (control.hasError('minlength')) return errors.messageMinLength;
    if (control.hasError('maxlength')) return errors.messageMaxLength;

    return '';
  }
}
