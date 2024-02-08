import {Component, Input, OnInit} from '@angular/core';
import {IProject} from '../../../../core/models/project';
import {Project} from '../../../../home/models/project';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: IProject;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateToProject(requestId?: string ) {
    this.router.navigate(['/', 'projects', requestId]);
  }
}
