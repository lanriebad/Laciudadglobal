import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatWeDoComponent } from './what-we-do.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const whatWeDoRoutes: Routes = [
  { path: '', component: WhatWeDoComponent }
];

@NgModule({
  declarations: [
    WhatWeDoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(whatWeDoRoutes),
    SharedModule
  ]
})
export class WhatWeDoModule { }
