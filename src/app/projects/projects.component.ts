import { Component, OnInit } from '@angular/core';
import {IProject} from '../core/models/project';
import {ProjectsService} from './projects.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  DEFAULT_PROJECT_IMAGE = '/assets/images/building-features/building-features-infrastructure.jpg';
  projects$: Observable<IProject[]> = this.projectsService.fetchProjects();
  constructor(private projectsService: ProjectsService) { }
  ngOnInit(): void {}

  trackById(_id:any,project: any) {
    return project.id;
  }

}
