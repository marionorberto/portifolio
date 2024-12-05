import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  showCVOption: boolean = false;
  isMenuShown: boolean = false;

  onshowCVOption() {
    this.showCVOption = !this.showCVOption;
  }

  showMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  isMenuClicked(clicked: boolean) {
    this.isMenuShown = !clicked;
  }
}
