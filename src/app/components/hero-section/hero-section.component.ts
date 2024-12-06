import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalHireComponent } from '../modal-hire/modal-hire.component';
import {
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { RiseButtonComponent } from '../rise-button/rise-button.component';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalHireComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  showCVOption: boolean = false;
  isMenuShown: boolean = false;
  dialog = inject(MatDialog);
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(RiseButtonComponent);
  }

  openDialog() {
    this.isMenuClicked(true);
    this.dialog.open(ModalHireComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

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
