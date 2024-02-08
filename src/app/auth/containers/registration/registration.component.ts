import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {concatMap, Observable, tap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  roleId$!: Observable<any>;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.getAccessToken()
      .pipe(tap(() => this.roleId$ = this.authService.getRoles()))
      .subscribe();
  }

  onSaveUser(userDetails: any) {
    this.authService.register(userDetails)
      .subscribe(res => {
        if (res.responseCode === '00') {
          this.router.navigate(['/', 'auth', 'login']);
        }
      })
  }
}
