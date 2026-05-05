import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
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
  toggleMobileMenu(): void {
    if (this.isAnimating) {
      return;
    }

    this.enableMenuTransitionTemporarily();

    const shouldOpen = !this.menuOpen();

    this.menuOpen.set(shouldOpen);
    this.animateMenuIcon(shouldOpen);
  }
  closeMobileMenu(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.enableMenuTransitionTemporarily();

    this.menuOpen.set(false);
    this.animateMenuIcon(false);
  }

  private animateMenuIcon(opening: boolean): void {
    this.clearAnimationTimeouts();

    this.isAnimating = true;

    const frames = opening ? this.openAnimationFrames : this.closeAnimationFrames;

    frames.forEach((frame, index) => {
      const timeout = window.setTimeout(
        () => {
          this.menuIcon.set(frame);

          const isLastFrame = index === frames.length - 1;

          if (isLastFrame) {
            this.isAnimating = false;
          }
        },
        this.frameDuration * (index + 1),
      );

      this.animationTimeouts.push(timeout);
    });
  }

  private clearAnimationTimeouts(): void {
    this.animationTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.animationTimeouts = [];
  }

  ngOnDestroy(): void {
    this.clearAnimationTimeouts();

    if (this.menuTransitionTimeout) {
      window.clearTimeout(this.menuTransitionTimeout);
    }
  }
}
