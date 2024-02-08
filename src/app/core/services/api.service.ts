import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from 'rxjs';
import {finalize} from "rxjs/operators";

import { ToastrService } from 'ngx-toastr';
import {APP_URLs} from '../../app.constants';
@Injectable({providedIn: 'root'})
export class ApiService {
  // loader = this.loadingBarService.useRef();

  constructor(private http: HttpClient,
              private toastService: ToastrService
  ) {
  }

  get<T>(url: string): Observable<T> {
    // this.loader.start();
    return this.http.get<T>(url)
      .pipe(
        finalize( () => {
          // this.loader.complete()
        } )
      );
  }

  post<T, K>(url: string, payload: T, options?: any, message = 'Operation Successful'): Observable<any> {
    // this.loader.start();
    return this.http.post<K>(url, payload, options)
      .pipe(
        tap( (response: any) => {
          if (
            url === APP_URLs.CONTACT_US_URL ||
            (response?.responseCode === '00' && url !== APP_URLs.REFRESH_TOKEN_URL)) {
            this.toastService.success(response?.responseMsg || message);
          } else {
            this.toastService.error(response?.responseMsg || 'Operation Unsuccessful');
          }
        }),
        finalize( () => {
          // this.loader.complete()
        } )
      );
  }
}
