import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalProjectsComponent } from '../modal-projects/modal-projects.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {

  isProjectHover: boolean = false;
  @Input() data: any;
  // dat = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ModalProjectsComponent, {
      data: this.data,
    });
  }

  handleProjectHover() {
    this.isProjectHover = true;
  }

  handleProjectBlur() {
    this.isProjectHover = false;
  }
}
