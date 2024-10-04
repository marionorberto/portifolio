import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {

  certificationNames: string[] = [
    'IT  V7 ESSENTIAL TRANNING',
    'DIGITAL ELECTRONIC TRANNING',
    'MICROCONTROLLER PROGRAMMING TRANNING',
    'PENTESTER HACKER | UDEMY',
    'CCNA1 V7 TRAINING',
    'ENGLISH COURSE ENTERMEDIATE LEVEL (B1) ',
    'COMPUTER CIENCE ENGENEER BACHELOR'
  ];

  showTimeline: boolean = false;

  handleShowTimeline() {
    this.showTimeline = !this.showTimeline;
  }
}
