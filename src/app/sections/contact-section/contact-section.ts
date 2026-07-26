import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Language } from '../../core/services/language';
import { HttpClient } from '@angular/common/http';

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

  private readonly mailUrl = 'http://localhost:8000/send-mail.php';
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().contact);

  private readonly formBuilder = inject(NonNullableFormBuilder);

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
    this.successMessage = false;
    this.sendErrorMessage = '';
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid || this.isSending) {
      return;
    }

    const payload = this.createContactPayload();

    this.sendContactMail(payload);
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
    this.sendErrorMessage = '';

    this.http.post<MailResponse>(this.mailUrl, payload).subscribe({
      next: (response) => {
        this.isSending = false;

        if (!response.success) {
          this.sendErrorMessage = response.error ?? 'Mail delivery failed.';
          return;
        }

        this.contactForm.reset();
        this.submitted = false;
        this.successMessage = true;
      },

      error: (error) => {
        this.isSending = false;
        this.sendErrorMessage =
          'Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.';
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
