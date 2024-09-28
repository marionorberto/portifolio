import { Component } from '@angular/core';
import { SingleVideoProjectComponent } from "../single-video-project/single-video-project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    SingleVideoProjectComponent,
    CommonModule
  ],
  templateUrl: './works.component.html',
})
export class WorksComponent {

  projectosContents = [
    {
      name: 'CyberNorb',
      link: 'https://cybernorb.vercel.app',
      details: 'this is a website like a blog for'
    },
    {
      name: 'EAB',
      link: 'https://eab.vercel.app',
      details: 'lorem10 aa dada erer acaca'
    },
    {
      name: 'Tablecoin',
      link: 'tablecoin.vercel.app',
      details: 'lorem10 aa dada erer acaca'
    },
    {
      name: 'Pokedex',
      link: 'https://pokedex-poke-two.vercel.app/',
      details: 'lorem10 aa dada erer acaca'
    },
    // {
    //   name: 'postable',
    //   link: 'linkedin.com',
    //   details: 'lorem10 aa dada erer acaca'
    // },
    // {
    //   name: 'kfragrance',
    //   link: 'linkedin.com',
    //   details: 'lorem10 aa dada erer acaca'
    // },
    // {
    //   name: 'CyberNorb',
    //   link: 'linkedin.com',
    //   details: 'lorem10 aa dada erer acaca'
    // },
    // {
    //   name: 'CyberNorb',
    //   link: 'linkedin.com'
    // },
    // {
    //   name: 'weather app',
    //   link: 'linkedin.com',
    //   detail: ''
    // },
    // {
    //   name: 'todoap',
    //   link: 'linkedin.com',
    //   details: 'lreo  adap eremma rppwe'
    // },
  ] 

}
