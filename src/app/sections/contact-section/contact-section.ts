import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
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
    email: ['', [Validators.required, Validators.email, Validators.minLength(2)]],
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

    console.log('contact form dara', this.contactForm.getRawValue());
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
    return this.isGerman()
      ? 'Danke! Deine Nachricht wurde erfolgreich geprüft.'
      : 'Thank you! Your message was successfully checked.';
  }

  errorMessage(field: ContactField): string {
    const control = this.contactForm.controls[field];

    if (!control.errors) return '';

    if (field === 'name') {
      if (control.hasError('required')) {
        return this.isGerman() ? 'Bitte gib deinen Namen ein.' : 'Please enter your name.';
      }

      if (control.hasError('minlength')) {
        return this.isGerman()
          ? 'Dein Name sollte mindestens 2 Zeichen haben.'
          : 'Your name should have at least 2 characters.';
      }
    }

    if (field === 'email') {
      if (control.hasError('required')) {
        return this.isGerman()
          ? 'Bitte gib deine E-Mail-Adresse ein.'
          : 'Please enter your email address.';
      }

      if (control.hasError('email')) {
        return this.isGerman()
          ? 'Bitte gib eine gültige E-Mail-Adresse ein.'
          : 'Please enter a valid email address.';
      }
    }

    if (field === 'message') {
      if (control.hasError('required')) {
        return this.isGerman() ? 'Bitte gib eine Nachricht ein.' : 'Please enter a message.';
      }

      if (control.hasError('minlength')) {
        return this.isGerman()
          ? 'Deine Nachricht sollte mindestens 10 Zeichen haben.'
          : 'Your message should have at least 10 characters.';
      }
    }

    if (field === 'privacy') {
      return this.isGerman()
        ? 'Bitte akzeptiere die Datenschutzerklärung.'
        : 'Please accept the privacy policy.';
    }

    return '';
  }
}
