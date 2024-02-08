import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {APP_ID} from "../../app.constants";

@Injectable({providedIn: 'root'})
export class AppIdInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.append('x-app-id', APP_ID)
    });

    return next.handle(modifiedReq);

  }
}
