export interface Project {
  id: number;
  name: string;
  imgUrl: string;
  tags: string[];
  clientName?: string;
  constructionPhoto?: string[];
  dateCreated?: string;
  dateOfCompletion?: string | Date;
  industry?: string;
  projectName?: string;
  projectType?: string;
  requestId?: string;
  projectCompletionDetail?: string,
  longDescription?:string
}

export const DEFAULT_PROJECT_IMAGE = '/assets/images/building-features/building-features-infrastructure.jpg';
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Private Home',
    imgUrl: DEFAULT_PROJECT_IMAGE,
    tags: ['Commercial', 'Renovation']
  },
  {
    id: 2,
    name: 'Private Home',
    imgUrl: DEFAULT_PROJECT_IMAGE,
    tags: ['Commercial', 'Renovation']
  },
  {
    id: 3,
    name: 'Private Home',
    imgUrl: DEFAULT_PROJECT_IMAGE,
    tags: ['Commercial', 'Renovation']
  },
  {
    id: 4,
    name: 'Private Home',
    imgUrl: DEFAULT_PROJECT_IMAGE,
    tags: ['Commercial', 'Renovation']
  }
]
