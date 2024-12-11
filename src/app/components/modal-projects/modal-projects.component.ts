import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogActions
} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions,
  ],
  templateUrl: './modal-projects.component.html',
  styleUrl: './modal-projects.component.css'
})
export class ModalProjectsComponent implements OnInit{
  data: any = inject(MAT_DIALOG_DATA);
  frontImg: string = '';
  isPosterVideo: boolean = false;
  showVideo: boolean = true;

  ngOnInit(): void {
    if(this.data.video) {
      this.isPosterVideo = true;
    }
      this.isPosterVideo = false;
      this.frontImg = this.data.poster;
  }

  onChangeFrontImg(url: string) {
    this.frontImg = url;
    this.showVideo = false;
  }
}
