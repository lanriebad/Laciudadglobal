import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ContactUsModel} from '../models/contact-us.model';
import {tap} from 'rxjs';
import {APP_URLs} from '../../app.constants';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class ContactUsService {
  constructor(private api: ApiService) {}

  onSubmitMessage(payload: ContactUsModel) {
    return this.api.post(APP_URLs.CONTACT_US_URL, payload)
  }
}
