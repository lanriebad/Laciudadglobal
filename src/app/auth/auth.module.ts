import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardContainerComponent} from './containers/dashboard/dashboard-container.component';
import {DashboardService} from './services/dashboard.service';
import {NewProjectContainerComponent} from './containers/new-project-container/new-project-container.component';
import {ProjectFormComponent} from './components/project-form/project-form.component';
import {ProjectResolver} from './project.resolver';
import {AuthGuardService} from './guards/auth.guard';
import {RegistrationComponent} from './containers/registration/registration.component';
import {NewUserFormComponent} from './components/new-user-form/new-user-form.component';
import {IhsFormComponent} from './components/ihs-form/ihs-form.component';
import {IhsPolicyComponent} from './containers/ihs-policy/ihs-policy.component';
import {AuthComponent} from './auth/auth.component';

const AuthRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {
    path: 'dashboard', component: AuthComponent, canActivateChild: [AuthGuardService], children: [
      {path: '', component: DashboardContainerComponent},
      {path: 'ihs', component: IhsPolicyComponent},
      {path: 'project', component: NewProjectContainerComponent},
      {
        path: 'project/:requestId', component: NewProjectContainerComponent, resolve: {
          project: ProjectResolver
        }
      },
    ]
  },
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardContainerComponent,
    NewProjectContainerComponent,
    ProjectFormComponent,
    RegistrationComponent,
    NewUserFormComponent,
    IhsFormComponent,
    IhsPolicyComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes)
  ],
  providers: [
    DashboardService,
    ProjectResolver,
    AuthGuardService,
  ]
})
export class AuthModule {
}
