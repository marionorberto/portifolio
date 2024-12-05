import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  email: string = '';
  bodyEmail: string = '';
  errors: string[] = [];
  showEmailCopy: boolean = false;
  
  sendEmail() {
    if(!this.email || !this.bodyEmail) {
      this.errors.push('email and email body required');
      return;
    }

    const recipient = 'marionorberto2018@gmail.com';
    const subject = 'Hiring Inquiry: Developer Position';
    const body = this.bodyEmail;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
    window.location.href = mailtoLink;
  }

  onShowEmailCopy() {
    // this.showEmailCopy = !this.showEmailCopy;
    alert('ok')
  }

  onHideEmailCopy() {
    this.showEmailCopy = false;
  }
}


