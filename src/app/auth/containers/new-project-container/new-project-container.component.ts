import {Component, OnInit} from '@angular/core';
import {IProject} from '../../../core/models/project';
import {DashboardService} from '../../services/dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-new-project-container',
  templateUrl: './new-project-container.component.html',
  styleUrls: ['./new-project-container.component.scss']
})
export class NewProjectContainerComponent implements OnInit {
  project?: IProject;

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.project = this.route.snapshot.data['project'];
  }

  onCreateProject(event: IProject) {
    let req = this.dashboardService.saveConstructionProject(event);
    if (event.requestId) {
      req = this.dashboardService.updateConstructionProject(event);
    }
    req.subscribe(this.navigateToDashboard.bind(this));
  }

  navigateToDashboard(res: any) {
    this.router.navigate(['/', 'auth', 'dashboard']);
  }
}
