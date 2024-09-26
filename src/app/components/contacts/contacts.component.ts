import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CalendarModule,CommonModule, FormsModule, ButtonModule, DialogModule ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  cardProfileData = {
    visible: false
  }
  date: Date | undefined;
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
  ];

handleCreatePost(value: boolean) {
  this.cardProfileData.visible = true;
}


  sendEmail() {
    const recipient = 'marionorberto2018@gmail.com';
    const subject = 'Hiring Inquiry: Fullstack Developer Position';
    const body = `Hi, I am interested in discussing opportunities for a Fullstack Developer role with you.
    Best regards, Mário Norberto`;

    // Create the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Redirect to the mailto link
    window.location.href = mailtoLink;
  }
}


