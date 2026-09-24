import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMobileNavOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuBtn = target.closest('.usa-menu-btn');
    const closeBtn = target.closest('.usa-nav__close');
    const navLink = target.closest('.usa-nav__link'); // <-- Check for navigation links
    const navDrawer = target.closest('.usa-nav');

    if (menuBtn) {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    } else if (closeBtn || navLink || (!navDrawer && this.isMobileNavOpen)) {
      this.isMobileNavOpen = false; // <-- Closes drawer when a link is clicked
    }
  }
}