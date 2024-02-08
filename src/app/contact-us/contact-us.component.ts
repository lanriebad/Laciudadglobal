import { Component, OnInit } from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {ContactUsService} from './services/contact-us.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private fb: UntypedFormBuilder,
              private cuService: ContactUsService) {
    this.contactUsForm = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmitContactUsForm() {
    this.cuService.onSubmitMessage(this.contactUsForm.value)
      .pipe(finalize(() => this.contactUsForm.reset()))
      .subscribe()
  }

}
