import { Component } from '@angular/core';
import { SingleVideoProjectComponent } from "../single-video-project/single-video-project.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    SingleVideoProjectComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './works.component.html',
})
export class WorksComponent {

  projectosContents = [
    {
      name: 'CyberNorb',
      link: 'https://cybernorb.vercel.app',
      github: 'https://github.com/marionorberto/cybernorb'
    },
    {
      name: 'Pokedex',
      link: 'https://pokedex-poke-two.vercel.app/',
      github: 'https://github.com/marionorberto/pokedex'
    },
    {
      name: 'Tablecoin',
      link: 'https://tablecoin.vercel.app',
      github: 'https://github.com/marionorberto/tablecoin'
    },
    {
      name: 'Portifolio',
      link: 'https://marionorberto.vercel.app/',
      github: 'https://github.com/marionorberto/portifolio'
    },
  ] 

  isProjectHover: boolean = false;
  isProjectHover2: boolean = false;
  isProjectHover3: boolean = false;
  isProjectHover4: boolean = false;

  handleProjectHover() {
    this.isProjectHover = true;
  }

  handleProjectBlur() {
    this.isProjectHover = false;
  }

  handleProjectHover2() {
    this.isProjectHover2 = true;
  }

  handleProjectBlur2() {
    this.isProjectHover2 = false;
  }

   handleProjectHover3() {
    this.isProjectHover3 = true;
  }

  handleProjectBlur3() {
    this.isProjectHover3 = false;
  }

   handleProjectHover4() {
    this.isProjectHover4 = true;
  }

  handleProjectBlur4() {
    this.isProjectHover4 = false;
  }

}
