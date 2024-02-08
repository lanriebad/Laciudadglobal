import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProject} from '../../core/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project!: IProject;
  projectImages = [
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg',
    '/assets/images/building-features/building-features-infrastructure.jpg'
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.project = this.route.snapshot.data['project'];
  }

  isProjectCompleted(project:string):boolean{
   return  project.toLowerCase() === 'completed'
  }

}
