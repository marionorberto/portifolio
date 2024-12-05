import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardServiceInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-card-services',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.css'
})
export class CardServicesComponent {
  @Input() data!: CardServiceInterface;
}
