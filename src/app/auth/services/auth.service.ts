import {Injectable} from "@angular/core";
// import {RoleModel, TokenModel} from "../models/token.model";
import {APP_URLs} from "../../app.constants";
// import {map, pluck} from "rxjs/operators";
// import {AuthUserModel} from "../../auth/auth-register/auth-user.model";
import {map, Observable, pluck, tap} from 'rxjs';
import {ApiService} from '../../core/services/api.service';
import {RoleModel, TokenModel} from '../../core/models/models';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private api: ApiService) {
  }

  getAccessToken(): Observable<{ accessToken: string, refreshToken: string }> {
    return this.api.get<TokenModel>(APP_URLs.GUEST_TOKEN_URL)
      .pipe(
        pluck('responseData'),
        map(responseData => ({
          accessToken: responseData?.[0]?.accessToken,
          refreshToken: responseData?.[0]?.refreshToken
        })),
        tap(({accessToken, refreshToken}) => {
          localStorage.setItem('x-t-id', accessToken);
          localStorage.setItem('x-r-id', refreshToken);
        })
      );
  }

  getRefreshToken(refreshToken: string) {
    return this.api.post<{refreshToken: string}, TokenModel>(APP_URLs.REFRESH_TOKEN_URL, {refreshToken})
      .pipe(
        pluck('responseData'),
        map(responseData => ({
          accessToken: responseData?.[0]?.accessToken,
          refreshToken: responseData?.[0]?.refreshToken
        }))
      );
  }
  //
  getRoles(): Observable<string | number> {
    return this.api.get<RoleModel>(APP_URLs.GET_ROLES_URL)
      .pipe(
        pluck('responseData'),
        map(responseData => responseData?.[0]?.roleid)
      );
  }
  register(payload: any): Observable<TokenModel> {
    return this.api.post<any, TokenModel>(APP_URLs.AUTH_REGISTER_URL, payload);
  }

  onLogin(payload: {email: string, password: string}): Observable<TokenModel> {
    return this.api.post<{email: string, password: string}, TokenModel>(APP_URLs.AUTH_LOGIN_URL, payload);
  }

  onUploadIhsPolicy(payload: {safetyCertificate: string}): Observable<any> {
    return this.api.post(APP_URLs.UPLOAD_IHS_POLICY, payload);
  }
  //
  // resetPassword(payload: {email: string, newPassword: string}): Observable<any> {
  //   return this.api.post<{email: string, newPassword: string}, any>(APP_URLs.RESET_PASSWORD_URL, payload);
  // }
  //
  // createProject(payload: any): Observable<any> {
  //   const saveUrl = /construction/i.test(payload.type) ? APP_URLs.CREATE_CONSTRUCTION_PROJECT : APP_URLs.CREATE_ELECTRICAL_PROJECT;
  //   return this.api.post(saveUrl, payload);
  // }
  //
  // getAllConstructionProjects(payload = {}): Observable<any> {
  //   return this.api.post<any, any>(APP_URLs.GET_ALL_CONSTRUCTION_PROJECTS_URL, payload);
  // }

  // getAllElectricalProjects(payload = {}): Observable<any> {
  //   return this.api.post<any, any>(APP_URLs.GET_ALL_ELECTRICAL_PROJECTS_URL, payload);
  // }
}
