import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactUsService} from './services/contact-us.service';

const contactUsRoutes: Routes = [
  {path: '', component: ContactUsComponent}
];

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contactUsRoutes),
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ContactUsService
  ]
})
export class ContactUsModule { }
