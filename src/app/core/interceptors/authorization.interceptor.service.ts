import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, filter, switchMap, take} from "rxjs/operators";
import {AuthService} from '../../auth/services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthorizationInterceptorService implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('x-t-id');
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }

    return next.handle(authReq)
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handle401Error(authReq, next);
          }
          return throwError(error);
        }));


  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = localStorage.getItem('x-r-id');
      if (token) {
        return this.authService.getRefreshToken(token).pipe(
          switchMap(({accessToken, refreshToken}) => {
            this.isRefreshing = false;
            localStorage.setItem('x-t-id', accessToken);
            localStorage.setItem('x-r-id', refreshToken);
            this.refreshTokenSubject.next(accessToken);
            const modRequest = request.clone({
              headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
            });
            return next.handle(modRequest);
          }),
          catchError((err) => {
            this.isRefreshing = false;
            return throwError(err);
          })
        );
      }
    }
    return this.refreshTokenSubject
      .pipe(
        filter((token: any) => token !== null),
        take(1),
        switchMap((token) => {
          let req = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          })
          return next.handle(req);
        })
      );
  }
}
