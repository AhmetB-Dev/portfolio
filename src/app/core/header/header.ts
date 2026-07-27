import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Language } from '../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  readonly lang = inject(Language);
  readonly text = computed(() => this.lang.texts().header);

  private readonly document = inject(DOCUMENT);

  readonly menuOpen = signal(false);
  readonly menuIcon = signal('/assets/icon/header/menu-open.svg');
  readonly menuAnimation = signal(false);

  private readonly openAnimationFrames = [
    '/assets/icon/header/menu-frame1.svg',
    '/assets/icon/header/menu-frame2.svg',
    '/assets/icon/header/menu-close.svg',
  ];

  private readonly closeAnimationFrames = [
    '/assets/icon/header/menu-frame2.svg',
    '/assets/icon/header/menu-frame1.svg',
    '/assets/icon/header/menu-open.svg',
  ];

  private readonly frameDuration = 70;
  private animationTimeouts: number[] = [];
  private isAnimating = false;

  private readonly navTransitionDuration = 160;
  private menuTransitionTimeout?: number;

  /**
   * Creates the header and synchronizes the mobile-menu state with the document body.
   */
  constructor() {
    effect(() => {
      this.document.body.classList.toggle('menu-open', this.menuOpen());
    });
  }

  /**
   * Enables the navigation transition for the duration of a single menu state change.
   */
  private enableMenuTransitionTemporarily(): void {
    this.menuAnimation.set(true);

    if (this.menuTransitionTimeout) {
      window.clearTimeout(this.menuTransitionTimeout);
    }

    this.menuTransitionTimeout = window.setTimeout(() => {
      this.menuAnimation.set(false);
      this.menuTransitionTimeout = undefined;
    }, this.navTransitionDuration + 30);
  }

  /**
   * Toggles the mobile navigation and starts the matching menu-icon animation.
   */
  toggleMobileMenu(): void {
    if (this.isAnimating) {
      return;
    }

    this.enableMenuTransitionTemporarily();

    const shouldOpen = !this.menuOpen();

    this.menuOpen.set(shouldOpen);
    this.animateMenuIcon(shouldOpen);
  }

  /**
   * Closes the mobile navigation when it is currently open.
   */
  closeMobileMenu(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.enableMenuTransitionTemporarily();

    this.menuOpen.set(false);
    this.animateMenuIcon(false);
  }

  /**
   * Animates the menu icon frame by frame for the requested menu direction.
   *
   * @param opening Whether the menu is opening rather than closing.
   */
  private animateMenuIcon(opening: boolean): void {
    this.clearAnimationTimeouts();
    this.isAnimating = true;

    const frames = this.getAnimationFrames(opening);
    frames.forEach((frame, index) => this.scheduleMenuIconFrame(frame, index, frames.length));
  }

  /**
   * Returns the icon frames for the requested menu direction.
   *
   * @param opening Whether the menu is opening rather than closing.
   * @returns The ordered animation frames.
   */
  private getAnimationFrames(opening: boolean): readonly string[] {
    return opening ? this.openAnimationFrames : this.closeAnimationFrames;
  }

  /**
   * Schedules a single menu-icon frame and stores its timeout identifier.
   *
   * @param frame The image path for the scheduled frame.
   * @param index The zero-based frame index.
   * @param frameCount The total number of animation frames.
   */
  private scheduleMenuIconFrame(frame: string, index: number, frameCount: number): void {
    const delay = this.frameDuration * (index + 1);
    const timeout = window.setTimeout(
      () => this.applyMenuIconFrame(frame, index, frameCount),
      delay,
    );

    this.animationTimeouts.push(timeout);
  }

  /**
   * Displays a menu-icon frame and completes the animation after the last frame.
   *
   * @param frame The image path to display.
   * @param index The zero-based frame index.
   * @param frameCount The total number of animation frames.
   */
  private applyMenuIconFrame(frame: string, index: number, frameCount: number): void {
    this.menuIcon.set(frame);

    if (index === frameCount - 1) {
      this.isAnimating = false;
    }
  }

  /**
   * Cancels every pending menu-icon animation timeout.
   */
  private clearAnimationTimeouts(): void {
    this.animationTimeouts.forEach((timeout) => window.clearTimeout(timeout));
    this.animationTimeouts = [];
  }

  /**
   * Releases timers and removes the global menu state when the header is destroyed.
   */
  ngOnDestroy(): void {
    this.clearAnimationTimeouts();

    if (this.menuTransitionTimeout) {
      window.clearTimeout(this.menuTransitionTimeout);
    }

    this.document.body.classList.remove('menu-open');
  }
}
