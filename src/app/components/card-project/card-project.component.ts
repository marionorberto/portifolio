import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  handleProjectHover() {
    this.isProjectHover = true;
  }

  handleProjectBlur() {
    this.isProjectHover = false;
  }
}
