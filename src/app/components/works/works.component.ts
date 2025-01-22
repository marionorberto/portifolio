import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardProjectComponent } from "../card-project/card-project.component";
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardProjectComponent
],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
  
})
export class WorksComponent implements OnInit {
  inputValue: string = '';
  isFocused: boolean = false;
  frontendProjects: any[] = [];
  backendProjects: any[] = [];
  fullstackProjects: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getFourFrontendProjects();
    this.getFourBackendProjects();
    this.getFourFullstackProjects();
  }

  onInputFocus(): void {
    this.isFocused = true;
  }

  onInputBlur(): void {
    this.isFocused = false;
  }

  getFourFrontendProjects(): void{
    this.dataService.getFrontendProjects().slice(0, 7).map((item) => {
      this.frontendProjects.push(item);
    });
  }

  getFourBackendProjects(): void{
    this.dataService.getBackendProjects().slice(0, 2).map((item) => {
      this.backendProjects.push(item);
    })
  }  

  getFourFullstackProjects(): void{
    this.dataService.getFullstackProjects().slice(0, 2).map((item) => {
      this.fullstackProjects.push(item);
    })
  }  
}
