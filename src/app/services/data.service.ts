import { Injectable } from '@angular/core';
import { CardProjectsInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [
   {
    frontend: [
      {
        title: 'cybernorb',
        description: 'cybernorb is website blog build to help tech lovers change their knowledge and ideias with comunity by publicing tech posts.',
        poster: '../../../assets/images/cybernorb-poster.png',
        site: 'https://cybernorb.vercel.app',
        github: 'https://github.com/marionorberto/cybernorb',
        mediaUrls: [
          '../../../assets/images/cybernorb-poster.png',
          '../../../assets/images/cybernorb-img-2.png',
          '../../../assets/images/cybernorb-img-4.png',
          '../../../assets/images/cybernorb-img-7.png',
          '../../../assets/images/cybernorb-img-6.png',
         ],
        techs: [
          'Typescript',
          'Angular',
          'PrimeNG',
          'Css Animation'
        ]
      },
        {
        title: 'tutorOn',
        description: 'tutorOn is education platform with allow you buy course, find a tutor and be in touch with educative content.',
        poster: '../../../assets/images/tutoron-poster.png',
        site: 'https://tutor-on.vercel.app',
        github: 'https://github.com/marionorberto/tutoron',
        mediaUrls: [
          '../../../assets/images/tutoron-poster.png',
          '../../../assets/images/tutoron-img-1.png',
          '../../../assets/images/tutoron-img-2.png',
          '../../../assets/images/tutoron-img-3.png',
          '../../../assets/images/tutoron-img-4.png',
         ],
        techs: [
          'javascript',
          'css',
          'bootstrap',
          'jquery'
        ]
      },
      {
        title: 'k-fragrance',
        description: 'kfragrance is online shop ecommerce of perfume sales, you can search buy permufe available and buy it.',
        poster: '../../../assets/images/kfragrance-poster.png',
        site: 'https://kfragrance.vercel.app',
        github: 'https://github.com/marionorberto/kfragrance',
        mediaUrls: [
          '../../../assets/images/kfragrance-poster.png',
          '../../../assets/images/kfragrance-img-1.png',
          '../../../assets/images/kfragrance-img-2.png',
          '../../../assets/images/kfragrance-img-3.png',
          '../../../assets/images/kfragrance-img-4.png',
        ],
        techs: [
          'Typescript',
          'Angular',
          'PrimeNG',
        ]
      },
      {
        title: 'pokedex',
        description: 'Pokedex is website that consumes a pokemon api and show every pokemon available, this nature, power, strength and so on.',
        poster: '../../../assets/images/pokedex-poster.png',
        site: 'https://pokedex-poke-two.vercel.app/',
        github: 'https://github.com/marionorberto/pokedex',
        mediaUrls: [
          '../../../assets/images/pokedex-poster.png',
          '../../../assets/images/pokedex-img-1.png',
          '../../../assets/images/pokedex-img-2.png',
          '../../../assets/images/pokedex-img-3.png',
          '../../../assets/images/pokedex-img-4.png',
        ],
        techs: [
          'Typescript',
          'Angular',
          'Css',
          'API Consuming'
        ]
      },
      {
        title: 'Tablecoin',
        description: 'Tablecoin is financial dashboard that allow you have a visual understanding of your incomes, expenses and etc.',
        poster: '../../../assets/images/tablecoin-poster.png',
        site: 'https://tablecoin.vercel.app',
        github: 'https://github.com/marionorberto/tablecoin',
        mediaUrls: [
          '../../../assets/images/tablecoin-poster.png',
          '../../../assets/images/tablecoin-img-1.png',
          '../../../assets/images/tablecoin-img-2.png',
          '../../../assets/images/tablecoin-img-3.png',
          '../../../assets/images/tablecoin-img-4.png',
        ],
        techs: [
          'Typescript',
          'Angular',
          'ChartJS',
          'Css',
        ]
      },
      {
        title: 'SoftFy Landing page',
        description: 'SoftFy is a simple landing page for showing softwares solutions.',
        poster: '../../../assets/images/softfy-poster.png',
        site: 'https://softfy-landingpage.vercel.app',
        github: 'https://github.com/marionorberto/softfy-landingpage',
        mediaUrls: [
          '../../../assets/images/softfy-poster.png',
          '../../../assets/images/softfy-img-1.png',
          '../../../assets/images/softfy-img-2.png',
          '../../../assets/images/softfy-img-3.png',
          '../../../assets/images/softfy-img-4.png',
        ],
        techs: [
          'Javascript',
          'Css',
          'Bootstrap5',
        ]
      },
        {
        title: 'TeamPace',
        description: 'team-pace is a dashboard that helps you manage your software project properly.',
        poster: '../../../assets/images/team-pace-poster.png',
        site: 'https://team-pace.vercel.app/teampace/login',
        github: 'https://github.com/marionorberto/team-pace',
        mediaUrls: [
          '../../../assets/images/team-pace-poster.png',
          '../../../assets/images/team-pace-img-1.png',
          '../../../assets/images/team-pace-img-2.png',
          '../../../assets/images/team-pace-img-3.png',
          '../../../assets/images/team-pace-img-4.png',
        ],
        techs: [
          'Angular',
          'Tailwing',
          'chartJs',
        ]
      },
    ],
    backend: [
      {
       title: 'Postable API',
        description: 'Postable is a RESTful API for post management. It is a robust API using NestJS, applying modular architecture and SOLID principles to create scalable and maintainable endpoints.',
        poster: '../../../assets/images/postable-poster.png',
        site: '',
        github: 'https://github.com/marionorberto/postable',
        mediaUrls: [
          '../../../assets/images/postable-poster.png',
          '../../../assets/images/postable-img-1.png',
          '../../../assets/images/postable-img-2.png',
          '../../../assets/images/postable-img-3.png',
          '../../../assets/images/postable-img-4.png',
        ],
        techs: [
          'Typescript',
          'NestJS',
          'JWT',
          'MYSQL'
        ]
      },
      {
        title: 'Tasker API',
        description: 'Task is a API for tasks management build to be consumed for a simple todo APP.',
        poster: '../../../assets/images/tasker-api-poster.png',
        site: '',
        github: 'https://github.com/marionorberto/tasker-api',
        mediaUrls: [
          '../../../assets/images/tasker-api-poster.png',
          '../../../assets/images/tasker-api-img-1.png',
          '../../../assets/images/tasker-api-img-2.png',
          '../../../assets/images/tasker-api-img-3.png',
          '../../../assets/images/tasker-api-img-4.png',
        ],
        techs: [
          'Typescript',
          'Express',
          'JWT',
          'MYSQL'
        ]
      },
      
    ],
    fullstack: [
      {
        title: 'EAB',
        description: 'EAB is a website that allows you making appointments booking for a hospital online and without efort. is an web aplication.',
        poster: '../../../assets/images/eab-poster.png',
        site: '',
        video: '../../../assets/videos/eab-poster.mp4',
        github: 'https://github.com/marionorberto/eab',
        mediaUrls: [
          '../../../assets/images/eab-poster.png',
          '../../../assets/images/eab-img-1.png',
          '../../../assets/images/eab-img-2.png',
          '../../../assets/images/eab-img-3.png',
          '../../../assets/images/eab-img-4.png',
        ],
        techs: [
          'Php',
          'Laravel',
          'Javascript',
          'MySQL'
        ]
      },
      {
        title: 'Tasker',
        description: 'Tasker is todo app to help you manage your daily tasks.',
        poster: '../../../assets/images/tasker-poster.png',
        site: 'https://tasker.easy.vercel.app',
        video: '../../../assets/videos/tasker-poster.mp4',
        github: 'https://github.com/marionorberto/tasker',
        mediaUrls: [
          '../../../assets/images/tasker-poster.png',
          '../../../assets/images/tasker-img-1.png',
          '../../../assets/images/tasker-img-2.png',
          '../../../assets/images/tasker-img-3.png',
          '../../../assets/images/tasker-img-4.png',
        ],
        techs: [
          'Typescript',
          'Angular',
          'Ng-Bstrap',
          'API CONSUMING'
        ]
      },
    ],
   },
  ]

  constructor() { }

  getFrontendProjects() {
    return this.projects[0].frontend;
  }
  getBackendProjects() {
    return this.projects[0].backend;
  }
  getFullstackProjects() {
    return this.projects[0].fullstack;
  }

}
