import {Validators} from '@angular/forms';

export interface IProject {
  clientName: string,
  projectType: string,
  industry: string,
  dateOfCompletion: string | Date,
  projectName: string,
  photos?: {constructionPhoto: string}[];
  id: number;
  name: string;
  imgUrl: string;
  tags: string[];
  constructionPhoto?: string[];
  dateCreated?: string;
  requestId?: string;
  projectCompletionDetail: string,
  longDescription?:string
}
