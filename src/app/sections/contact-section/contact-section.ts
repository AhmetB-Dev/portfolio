import { Component, HostListener, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Language } from '../../core/services/language';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

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

/**
 * Requires a public-looking domain with a dot and a 2-63 letter top-level domain.
 * Angular's built-in email validator intentionally also accepts addresses such as test@e.
 */
const PUBLIC_EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,63}$/;

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, RouterLink, RevealDirective],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly mailUrl = 'https://ahmet-balci.de/backend/send-mail.php';
  readonly contactEmail = 'ahmet_ba@web.de';

  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().contact);

  submitted = false;
  successMessage = false;
  isSending = false;
  sendErrorMessage = '';
  activeField: ContactField | null = null;

  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.pattern(PUBLIC_EMAIL_PATTERN)],
    ],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  /**
   * Validates the contact form and sends a mail request when all fields are valid.
   */
  onSubmit(): void {
    this.activeField = null;
    this.submitted = true;
    this.closeStatus();
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid || this.isSending) {
      return;
    }

    this.sendContactMail(this.createContactPayload());
  }

  /**
   * Clears the currently visible success or error status message.
   */
  closeStatus(): void {
    this.successMessage = false;
    this.sendErrorMessage = '';
    this.unlockPageScroll();
  }

  /**
   * Closes an open status dialog when the Escape key is pressed.
   */
  @HostListener('document:keydown.escape')
  closeStatusWithEscape(): void {
    if (this.successMessage || this.sendErrorMessage) {
      this.closeStatus();
    }
  }

  /**
   * Creates the backend payload from the current form values.
   *
   * @returns The normalized contact-mail payload.
   */
  private createContactPayload(): ContactPayload {
    const formData = this.contactForm.getRawValue();

    return {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      honeypot: '',
    };
  }

  /**
   * Sends the contact-mail payload to the configured mail endpoint.
   *
   * @param payload The validated contact data to submit.
   */
  private sendContactMail(payload: ContactPayload): void {
    this.isSending = true;
    this.closeStatus();

    this.http.post<MailResponse>(this.mailUrl, payload).subscribe({
      next: (response) => this.handleMailResponse(response),
      error: (error: unknown) => this.handleMailRequestError(error),
    });
  }

  /**
   * Applies the UI state returned by a completed mail request.
   *
   * @param response The response returned by the mail endpoint.
   */
  private handleMailResponse(response: MailResponse): void {
    this.isSending = false;

    if (!response.success) {
      this.sendErrorMessage = this.text().sendErrorMessage;
      this.lockPageScroll();
      console.error('Mail delivery failed:', response.error);
      return;
    }

    this.contactForm.reset();
    this.activeField = null;
    this.submitted = false;
    this.successMessage = true;
    this.lockPageScroll();
  }

  /**
   * Applies the error state when the HTTP mail request fails.
   *
   * @param error The request error reported by Angular's HTTP client.
   */
  private handleMailRequestError(error: unknown): void {
    this.isSending = false;
    this.sendErrorMessage = this.text().sendErrorMessage;
    this.lockPageScroll();
    console.error('Mail request failed:', error);
  }

  /**
   * Prevents the page behind the status dialog from scrolling.
   */
  private lockPageScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  /**
   * Restores page scrolling after the status dialog has been closed.
   */
  private unlockPageScroll(): void {
    document.body.style.overflow = '';
  }

  /**
   * Hides validation feedback while the user is editing a text field.
   * The result is shown again only after the field loses focus.
   *
   * @param field The field that currently receives keyboard input.
   */
  onFieldFocus(field: ContactField): void {
    this.activeField = field;
  }

  /**
   * Finishes editing a field and enables its validation feedback.
   *
   * @param field The field that has just lost focus.
   */
  onFieldBlur(field: ContactField): void {
    this.activeField = null;
    this.contactForm.controls[field].markAsTouched();
  }

  /**
   * Checks whether a form field should be displayed as invalid.
   * Text fields stay neutral while the user is actively typing.
   * Empty fields stay neutral after blur and are only marked invalid after submit.
   *
   * @param field The contact-form field to inspect.
   * @returns Whether the field should be displayed as invalid.
   */
  isInvalid(field: ContactField): boolean {
    const control = this.contactForm.controls[field];

    if (field !== 'privacy' && this.activeField === field) {
      return false;
    }

    if (this.submitted) {
      return control.invalid;
    }

    if (field === 'privacy') {
      return false;
    }

    return control.touched && this.hasValue(field) && control.invalid;
  }

  /**
   * Checks whether a non-empty form field should be displayed as valid after blur.
   * Validation feedback stays hidden while the field is being edited.
   *
   * @param field The contact-form field to inspect.
   * @returns Whether the field should be displayed as valid.
   */
  isValid(field: ContactField): boolean {
    const control = this.contactForm.controls[field];

    if (this.activeField === field) {
      return false;
    }

    return control.touched && this.hasValue(field) && control.valid;
  }

  /**
   * Checks whether a form field contains a meaningful value.
   *
   * @param field The contact-form field to inspect.
   * @returns Whether the field contains a non-empty value.
   */
  private hasValue(field: ContactField): boolean {
    const value = this.contactForm.controls[field].value;
    return typeof value === 'string' ? value.trim().length > 0 : value;
  }

  /**
   * Returns the translated success message for the status dialog.
   *
   * @returns The localized success message.
   */
  successText(): string {
    return this.text().successMessage;
  }

  /**
   * Builds a localized mailto URL for manually contacting the portfolio owner.
   *
   * @returns A mailto URL containing the localized subject line.
   */
  manualMailUrl(): string {
    const subject =
      this.lang.current() === 'de'
        ? 'Kontaktanfrage über das Portfolio'
        : 'Portfolio contact request';

    return `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}`;
  }

  /**
   * Resolves the localized validation message for a contact-form field.
   *
   * @param field The contact-form field whose validation message is needed.
   * @returns The matching localized error message, or an empty string.
   */
  errorMessage(field: ContactField): string {
    const control = this.contactForm.controls[field];

    if (!control.errors) return '';

    if (field === 'name') return this.nameErrorMessage();
    if (field === 'email') return this.emailErrorMessage();
    if (field === 'message') return this.messageErrorMessage();
    if (field === 'privacy') return this.text().errors.privacyRequired;

    return '';
  }

  /**
   * Resolves the current validation message for the name field.
   *
   * @returns The localized name validation message, or an empty string.
   */
  private nameErrorMessage(): string {
    const control = this.contactForm.controls.name;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.nameRequired;
    if (control.hasError('minlength')) return errors.nameMinLength;

    return '';
  }

  /**
   * Resolves the current validation message for the email field.
   *
   * @returns The localized email validation message, or an empty string.
   */
  private emailErrorMessage(): string {
    const control = this.contactForm.controls.email;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.emailRequired;
    if (control.hasError('email') || control.hasError('pattern')) return errors.emailInvalid;

    return '';
  }

  /**
   * Resolves the current validation message for the message field.
   *
   * @returns The localized message validation text, or an empty string.
   */
  private messageErrorMessage(): string {
    const control = this.contactForm.controls.message;
    const errors = this.text().errors;

    if (control.hasError('required')) return errors.messageRequired;
    if (control.hasError('minlength')) return errors.messageMinLength;
    if (control.hasError('maxlength')) return errors.messageMaxLength;

    return '';
  }
}
