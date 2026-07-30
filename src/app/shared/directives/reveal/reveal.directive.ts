import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RevealDirection = 'up' | 'left' | 'right';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, AfterViewInit, OnDestroy {
  private static readonly overflowGuardCounts = new WeakMap<HTMLElement, number>();
  private static readonly animationDuration = 1100;

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer: IntersectionObserver | null = null;
  private animationFrameId: number | null = null;
  private overflowGuardHost: HTMLElement | null = null;
  private overflowGuardReleased = false;
  private overflowGuardFallbackId: number | null = null;
  private removeTransitionEndListener: (() => void) | null = null;

  @Input() revealFrom: RevealDirection = 'up';
  @Input() revealDelay = 0;

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.addClass(element, `reveal--${this.revealFrom}`);
    this.renderer.setStyle(element, '--reveal-delay', `${Math.max(0, this.revealDelay)}ms`);

    if (isPlatformBrowser(this.platformId) && this.revealFrom === 'right') {
      this.addOverflowGuard();
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || this.shouldSkipAnimation()) {
      this.showElement();
      this.releaseOverflowGuard();
      return;
    }

    this.animationFrameId = window.requestAnimationFrame(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) {
            return;
          }

          this.showElement();
          this.watchForAnimationEnd();
          this.observer?.disconnect();
          this.observer = null;
        },
        {
          threshold: 0.25,
          rootMargin: '0px 0px -12% 0px',
        },
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.removeTransitionEndListener?.();

    if (this.animationFrameId !== null && isPlatformBrowser(this.platformId)) {
      window.cancelAnimationFrame(this.animationFrameId);
    }

    if (this.overflowGuardFallbackId !== null && isPlatformBrowser(this.platformId)) {
      window.clearTimeout(this.overflowGuardFallbackId);
    }

    this.releaseOverflowGuard();
  }

  private shouldSkipAnimation(): boolean {
    return (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
    );
  }

  private showElement(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'reveal--visible');
  }

  private addOverflowGuard(): void {
    const host = this.elementRef.nativeElement.closest<HTMLElement>('section');

    if (!host) {
      return;
    }

    this.overflowGuardHost = host;
    const currentCount = RevealDirective.overflowGuardCounts.get(host) ?? 0;

    RevealDirective.overflowGuardCounts.set(host, currentCount + 1);
    this.renderer.addClass(host, 'reveal-overflow-guard');
  }

  private watchForAnimationEnd(): void {
    if (!this.overflowGuardHost || typeof window === 'undefined') {
      return;
    }

    const element = this.elementRef.nativeElement;
    const finish = (): void => {
      this.removeTransitionEndListener?.();
      this.removeTransitionEndListener = null;

      if (this.overflowGuardFallbackId !== null) {
        window.clearTimeout(this.overflowGuardFallbackId);
        this.overflowGuardFallbackId = null;
      }

      this.releaseOverflowGuard();
    };

    this.removeTransitionEndListener = this.renderer.listen(
      element,
      'transitionend',
      (event: TransitionEvent) => {
        if (event.target === element) {
          finish();
        }
      },
    );

    this.overflowGuardFallbackId = window.setTimeout(
      finish,
      Math.max(0, this.revealDelay) + RevealDirective.animationDuration + 150,
    );
  }

  private releaseOverflowGuard(): void {
    if (!this.overflowGuardHost || this.overflowGuardReleased) {
      return;
    }

    this.overflowGuardReleased = true;
    const host = this.overflowGuardHost;
    const currentCount = RevealDirective.overflowGuardCounts.get(host) ?? 1;

    if (currentCount <= 1) {
      RevealDirective.overflowGuardCounts.delete(host);
      this.renderer.removeClass(host, 'reveal-overflow-guard');
    } else {
      RevealDirective.overflowGuardCounts.set(host, currentCount - 1);
    }

    this.overflowGuardHost = null;
  }
}
