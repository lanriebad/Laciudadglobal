import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-ihs-policy',
  templateUrl: './ihs-policy.component.html',
  styleUrls: ['./ihs-policy.component.scss']
})
export class IhsPolicyComponent implements OnInit {
  loading = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onUploadIhsForm(base64Img: string) {
    this.loading = true;
    return this.authService.onUploadIhsPolicy({safetyCertificate: base64Img})
      .subscribe({
        next: () => {},
        error: () => this.loading = false,
        complete: () => this.loading = false
      });
  }
}
