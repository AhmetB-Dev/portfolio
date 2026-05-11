import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Language } from '../../core/services/language';

type ContactField = 'name' | 'email' | 'message' | 'privacy';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().contact);

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private isGerman(): boolean {
    return this.lang.current() === 'de';
  }
  submitted = false;
  successMessage = false;

  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = false;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Contact form data:', this.contactForm.getRawValue());
    this.contactForm.reset();
    this.submitted = false;
    this.successMessage = true;
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
    const errors = this.text().errors;

    if (!control.errors) return '';

    if (field === 'name') {
      if (control.hasError('required')) return errors.nameRequired;
      if (control.hasError('minlength')) return errors.nameMinLength;
    }

    if (field === 'email') {
      if (control.hasError('required')) return errors.emailRequired;
      if (control.hasError('email')) return errors.emailInvalid;
    }

    if (field === 'message') {
      if (control.hasError('required')) return errors.messageRequired;
      if (control.hasError('minlength')) return errors.messageMinLength;
    }

    if (field === 'privacy') {
      if (control.hasError('required')) return errors.privacyRequired;
    }
    return '';
  }
}
