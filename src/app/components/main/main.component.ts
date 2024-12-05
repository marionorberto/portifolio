import { Component } from '@angular/core';
import { WorksComponent } from '../works/works.component';
import { ServicesComponent } from '../services/services.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ResumeComponent } from '../resume/resume.component';
import { HeroSectionComponent } from "../hero-section/hero-section.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WorksComponent,
    ServicesComponent,
    ContactsComponent,
    ResumeComponent,
    HeroSectionComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
