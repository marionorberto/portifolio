import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hire-me',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './hire-me.component.html',
  styleUrl: './hire-me.component.css'
})
export class HireMeComponent {
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
