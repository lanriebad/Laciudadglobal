import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from '../shared/ui/components/project-card/project-card.component';
import {SharedModule} from '../shared/shared.module';
import {ProjectsService} from './projects.service';
import {ProjectDetailResolver} from './project-detail.resolver';

const projectRoutes: Routes = [
  {
    path: '', component: ProjectsComponent
  },
  {
    path: ':requestId', component: ProjectComponent, resolve: {
      project: ProjectDetailResolver
    }
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes),
    SharedModule
  ],
  providers: [
    ProjectsService,
    ProjectDetailResolver
  ]
})
export class ProjectsModule { }
