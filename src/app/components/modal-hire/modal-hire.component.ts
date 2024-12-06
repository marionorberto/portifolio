import {Component, inject} from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogActions
} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-hire',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions
  ],
  templateUrl: './modal-hire.component.html',
  styleUrl: './modal-hire.component.css'
})
export class ModalHireComponent {
  data = inject(MAT_DIALOG_DATA);


  sendEmail(option: string) {
    let subject = ''
    if(option == 'web') {
      subject = 'Hiring Inquiry: web developer Position';  
    } else if(subject == 'mobile') {
       subject = 'Hiring Inquiry: mobile Developer Position'
    } else if (subject == 'electronic') {
       subject = 'Digital Electronic: Digital Electronic Project'
    } else if(subject == 'guidance') {
       subject = 'Project Guidance: Project Guidance help'
    } else {
      return;
    }
    const recipient = 'marionorberto2018@gmail.com';
    const body = 'Hello Mário Norberto, I would like to ...';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
    window.location.href = mailtoLink;
  }
}
