import { Component, OnInit } from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

import {TokenModel} from '../../../core/models/models';

import {encryptText} from '../../../utils/encrypt';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });
  loading = false;
  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.onLogin(this.formPayload)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: this.onSuccessfulLogin.bind(this)
        })
    }
  }

  onSuccessfulLogin(res: TokenModel) {
    if (/00/.test(res.responseCode)) {
      localStorage.setItem('x-t-id', res.responseData?.[0]?.accessToken);
      localStorage.setItem('x-r-id', res.responseData?.[0]?.refreshToken);
      localStorage.setItem('x-u-d', btoa(JSON.stringify(res.responseData[0].user)));
      this.router.navigate(['/auth', 'dashboard']);
    } else {

    }
  }

  get formPayload() {
    return {
      email: this.loginForm.get('email')!.value.trim(),
      password: encryptText(this.loginForm.get('password')!.value)
    }
  }

}
