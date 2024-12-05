import { Component } from '@angular/core';
import { CardServicesComponent } from '../card-services/card-services.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardServicesComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  cardServiceData: any[] = [
    {
      title: 'Web Development',
      text: 'To build the modern web aplications used nowdays around the world on web i use techs such as:',
      languages: [
        'Angular',
        'Nestjs',
        'Php',
        'Laravel',
        'Javascript',
        'Typescript',
        'Tailwind',
        'Css'
      ],
      imageLink: '../../../assets/images/web.svg'
    },
    {
      title: 'Mobile Development',
      text: 'Mobile apps is on fire and i often use a very powerfull Javascript framework for building my mobile aplication well-known as:',
      languages: [
        'Javascript',
        'React-Native'
      ],
      imageLink: '../../../assets/images/mobile.svg'
    },
    {
      title: 'Desktop Development',
      text: '   For Desktop devlopment i often use a very powerfull .Net Platform with the Windowns form application framework known as:',
      languages: [
        'C#',
        'WFA',
        '.Net',
      ],
      imageLink: '../../../assets/images/desktop.svg'
    },
    {
      title: 'Pentest Hacking',
      text: 'I am a also a hacker antusiast and i have been studying tools for penetration testing such as:',
      languages: [
        'kaliLinux', 
        'Wireshark',
        'Nmap',
        'Browser' 
      ],
      imageLink: './../../assets/images/bug.svg'
    }    
  ]  
}
