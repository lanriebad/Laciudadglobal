import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BusinessFeatureCardComponent } from './components/business-feature-card/business-feature-card.component';
import { ProjectsService } from '../projects/projects.service';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, BusinessFeatureCardComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), SharedModule],
  providers: [ProjectsService],
})
export class HomeModule {}
