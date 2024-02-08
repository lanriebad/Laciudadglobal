import {Injectable} from '@angular/core';
import {ApiService} from '../core/services/api.service';
import {map, Observable, pluck} from 'rxjs';
import {IProject} from '../core/models/project';
import {APP_URLs} from '../app.constants';

@Injectable()
export class ProjectsService {
  constructor(private api: ApiService) {
  }

  fetchProjects(): Observable<IProject[]> {
    return this.api.get<any>(APP_URLs.FETCH_PROJECTS)
      .pipe(pluck('responseData'))
  }

  fetchProjectDetails(requestId: string): Observable<IProject> {
    return this.api.post(APP_URLs.FETCH_PROJECT_DETAILS, {requestId})
      .pipe(
        pluck('responseData'),
        map(response => response[0])
      )
  }
}
