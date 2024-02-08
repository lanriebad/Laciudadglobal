import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const userString = localStorage.getItem('x-u-d');
      if (userString) {
        const userDetails = JSON.parse(atob(userString));
        return /admin/i.test(userDetails.userRole) || this.router.createUrlTree(['/']);
      }
    } catch (e) {
    }
    return this.router.createUrlTree(['/']);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
