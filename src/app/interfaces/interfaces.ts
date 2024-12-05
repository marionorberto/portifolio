export interface CardServiceInterface {
  title: string,
  text: string,
  languages: string[],
  imageLink: string,
}

export interface CardProjectsInterface {
  frontend: [
    CardProjectsItemsInterface[]
  ],
  backend: [
    CardProjectsItemsInterface[]
  ],
  fullstack: [
    CardProjectsItemsInterface[]
  ]
}

export interface CardProjectsItemsInterface {
  title: string,
  text: string,
  poster: string,
  site: string,
  github: string,
  mediaUrls: string[],
  tech: string[]      
}