import {Injectable} from '@angular/core';
import {IProject} from '../core/models/project';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectsService} from './projects.service';



@Injectable()
export class ProjectDetailResolver implements Resolve<Partial<IProject>> {
  constructor(private projectService: ProjectsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Partial<IProject>> | Promise<Partial<IProject>> | Partial<IProject> {
    const requestId = route.paramMap.get('requestId');
    if (requestId) {
      return this.projectService.fetchProjectDetails(requestId);
    }
    return of({});
  }
}
