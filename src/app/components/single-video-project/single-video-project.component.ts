import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-video-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './single-video-project.component.html',
  styleUrl: './single-video-project.component.css'
})
export class SingleVideoProjectComponent {

  isProjectHover: boolean = false;
  @Input() projectContent: any = [];

  handleProjectHover() {
    this.isProjectHover = true;
  }

  handleProjectBlur() {
    this.isProjectHover = false;
  }
}
