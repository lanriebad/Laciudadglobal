import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IProject} from '../core/models/project';
import {DashboardService} from './services/dashboard.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class ProjectResolver implements Resolve<Partial<IProject>> {
  constructor(private dashboardService: DashboardService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Partial<IProject>> | Promise<Partial<IProject>> | Partial<IProject> {
    const requestId = route.paramMap.get('requestId');
    if (requestId) {
      return this.dashboardService.findConstructionProjectByRequestId({requestId});
    }
    return of({});
  }
}
