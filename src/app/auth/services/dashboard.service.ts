import {Injectable} from '@angular/core';
import {map, Observable, pluck, tap} from 'rxjs';
import {APP_URLs} from '../../app.constants';
import {ApiService} from '../../core/services/api.service';
import {IProject} from '../../core/models/project';

@Injectable()
export class DashboardService {
  constructor(private api: ApiService) {
  }

  getProjectCompletionDetail(): Observable<any>{
    return this.api.get<any>(APP_URLs.GET_PROJECT_COMPLETION_LIST)
    .pipe(
      pluck('responseData','0'),
      map((completionStatus: any) => {
        return Object.values(completionStatus);
      })
    )
  }

  getConstructionProjects(): Observable<any> {
    return this.api.get<any>(APP_URLs.GET_ALL_CONSTRUCTION_PROJECTS_URL)
      .pipe(
        pluck('responseData'),
      );
  }

  findConstructionProjectByRequestId(payload: { requestId: string }): Observable<any> {
    return this.api.post(APP_URLs.RETRIEVE_CONSTRUCTION_PROJECT, payload)
      .pipe(
        pluck('responseData'),
        map( response => response[0]));
  }

  saveConstructionProject(payload: IProject): Observable<any> {
    return this.api.post(APP_URLs.CREATE_CONSTRUCTION_PROJECT, payload)
  }

  updateConstructionProject(payload: IProject): Observable<any> {
    return this.api.post(APP_URLs.UPDATE_CONSTRUCTION_PROJECT, payload);
  }

  deleteConstructionProject(payload: {requestId: string}): Observable<any> {
    return this.api.post(APP_URLs.DELETE_CONSTRUCTION_PROJECT, payload)
  }
}
