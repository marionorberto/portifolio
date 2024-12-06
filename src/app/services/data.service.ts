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
        description: '----',
        poster: '../../../assets/images/cybernorb-poster.png',
        site: 'https://cybernorb.vercel.app',
        github: 'https://github.com/marionorberto/cybernorb',
        mediaUrls: [
          'cybernorb-video',
          'cybernorb-img-1',
          'cybernorb-img-2',
          'cybernorb-img-3',
          'cybernorb-img-4',
         ],
        techs: [
          'Typescript',
          'Angular',
          'PrimeNG',
          'Css Animation'
        ]
      },
      {
        title: 'k-fragrance',
        description: '---',
        poster: '../../../assets/images/kfragrance-poster.png',
        site: 'https://cybernorb.vercel.app',
        github: 'https://github.com/marionorberto/kfragrance',
        mediaUrls: [
          'kfragrance-video',
          'kfragrance-img-1',
          'kfragrance-img-2',
          'kfragrance-img-3',
          'kfragrance-img-4',
        ],
        techs: [
          'Typescript',
          'Angular',
          'PrimeNG',
        ]
      },
      {
        title: 'pokedex',
        description: '---',
        poster: '../../../assets/images/pokedex-poster.png',
        site: 'https://pokedex.poke.vercel.app',
        github: 'https://github.com/marionorberto/pokedex',
        mediaUrls: [
          'pokedex-video',
          'pokedex-img-1',
          'pokedex-img-2',
          'pokedex-img-3',
          'pokedex-img-4',
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
        description: '---',
        poster: '../../../assets/images/tablecoin-poster.png',
        site: '---',
        github: '---',
        mediaUrls: [
          'tablecoin-video',
          'tablecoin-img-1',
          'tablecoin-img-2',
          'tablecoin-img-3',
          'tablecoin-img-4',
        ],
        techs: [
          'Typescript',
          'Angular',
          'ChartJS',
          'Css',
        ]
      }
    ],
    backend: [
      {
       title: 'Postable API',
        description: '---',
        poster: '../../../assets/images/postable-poster.png',
        site: '---',
        github: '---',
        mediaUrls: [
          'postable-video',
          'postable-img-1',
          'postable-img-2',
          'postable-img-3',
          'postable-img-4',
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
        description: '---',
        poster: '../../../assets/images/tasker-api-poster.png',
        site: '---',
        github: 'https://github.com/marionorberto/tasker-api',
        mediaUrls: [
          'tasker-api-video',
          'tasker-api-img-1',
          'tasker-api-img-2',
          'tasker-api-img-3',
          'tasker-api-img-4',
        ],
        techs: [
          'Typescript',
          'Express',
          'JWT',
          'MYSQL'
        ]
      },
      {
        title: 'project-redis',
        description: '----',
        poster: '../../../assets/images/project-redis.png',
        site: '---',
        github: '---',
        mediaUrls: [
          'project-redis-video',
          'project-redis-img-1',
          'project-redis-img-2',
          'project-redis-img-3',
          'project-redis-img-4',
        ],
        techs: [
          'Typescript',
          'Express',
          'JWT',
          'MYSQL'
        ]
      },
      {
        title: 'project-kafka',
        description: '---',
        poster: '../../../assets/images/project-kafka.png',
        site: '---',
        github: '---',
        mediaUrls: [
          'project-kafka-video',
          'project-kafka-img-1',
          'project-kafka-img-2',
          'project-kafka-img-3',
          'project-kafka-img-4',
        ],
        techs: [
          'Typescript',
          'NestJS',
          'APACHE KAFKA',
          'PostgresSQL'
        ]
      }
    ],
    fullstack: [
      {
        title: 'EAB',
        description: '---',
        poster: '../../../assets/images/eab-poster.png',
        site: '---',
        github: 'https://github.com/marionorberto/eab',
        mediaUrls: [
          'eab-video',
          'eab-img-1',
          'eab-img-2',
          'eab-img-3',
          'eab-img-4',
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
        description: '---',
        poster: '../../../assets/images/tasker-poster.png',
        site: '---',
        github: 'https://github.com/marionorberto/tasker',
        mediaUrls: [
          'tasker-video',
          'tasker-img-1',
          'tasker-img-2',
          'tasker-img-3',
          'tasker-img-4',
        ],
        techs: [
          'Typescript',
          'Angular',
          'Ng-Bstrap',
          'API CONSUMING'
        ]
      },
 {
        title: 'Tasker',
        description: '---',
        poster: '../../../assets/images/tasker-poster.png',
        site: '---',
        github: 'https://github.com/marionorberto/tasker',
        mediaUrls: [
          'tasker-video',
          'tasker-img-1',
          'tasker-img-2',
          'tasker-img-3',
          'tasker-img-4',
        ],
        techs: [
          'Typescript',
          'Angular',
          'Ng-Bstrap',
          'API CONSUMING'
        ]
      },
 {
        title: 'Tasker',
        description: '---',
        poster: '../../../assets/images/tasker-poster.png',
        site: '---',
        github: 'https://github.com/marionorberto/tasker',
        mediaUrls: [
          'tasker-video',
          'tasker-img-1',
          'tasker-img-2',
          'tasker-img-3',
          'tasker-img-4',
        ],
        techs: [
          'Typescript',
          'Angular',
          'Ng-Bstrap',
          'API'
        ]
      },            
      // {
      //   title: '',
      //   description: '',
      //   poster: '',
      //   site: '',
      //   github: '',
      //   mediaUrls: [],
      //   techs: []
      // },
      // {
      //   title: '',
      //   description: '',
      //   poster: '',
      //   site: '',
      //   github: '',
      //   mediaUrls: [],
      //   techs: []
      // },
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



  //   {
  //     name: 'Pokedex',
  //     link: 'https://pokedex-poke-two.vercel.app/',
  //     github: 'https://github.com/marionorberto/pokedex'
  //   },
  //   {
  //     name: 'Tablecoin',
  //     link: 'https://tablecoin.vercel.app',
  //     github: 'https://github.com/marionorberto/tablecoin'
  //   },
  //   {
  //     name: 'Portifolio',
  //     link: 'https://marionorberto.vercel.app/',
  //     github: 'https://github.com/marionorberto/portifolio'
  //   },
  // ] 
}
