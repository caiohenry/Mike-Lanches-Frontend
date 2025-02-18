import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ButtonComponent, NgStyle],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen = false;

  constructor(private router$: Router) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menu = document.querySelector('.navbar-responsive');
    const button = document.querySelector('.hamburger');

    if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
      if (this.menuOpen == true) {
        this.menuOpen = false;
      }

    }

  }

  goToLoginPage() {
    this.router$.navigateByUrl('/login');
  }

}
