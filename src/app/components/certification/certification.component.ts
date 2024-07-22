import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent
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

}
