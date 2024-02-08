import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BUSINESS_FEATURES, BusinessFeature } from './models/business-feature';
import { SPECIALISATIONS, Specialization } from './models/specialization';
import { Project, PROJECTS } from './models/project';
import {
  fromEvent,
  map,
  Observable,
  pluck,
  Subject,
  takeUntil,
  takeWhile,
  withLatestFrom,
} from 'rxjs';
import { IProject } from '../core/models/project';
import { ProjectsService } from '../projects/projects.service';
import { ApiService } from '../core/services/api.service';
import { APP_URLs } from '../app.constants';
import { SERVICES, Service } from './models/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('specialization') specializationContainer!: ElementRef;
  businessFeatures: BusinessFeature[] = BUSINESS_FEATURES;
  specialisations: Specialization[] = SPECIALISATIONS;
  projects$: Observable<IProject[]> = this.projectService.fetchProjects();
  services: Service[] = SERVICES;
  constructor(
    private projectService: ProjectsService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  trackById(
    _index: any,
    feature: BusinessFeature | Specialization | Project
  ): number {
    return feature.id;
  }

  onScrollLeft() {
    const width = this.specializationCardWidth;
    this.specializationContainer.nativeElement.scroll({
      left: this.specializationContainer.nativeElement.scrollLeft + width,
      behavior: 'smooth',
    });
  }

  onScrollRight() {
    const width = this.specializationCardWidth;
    this.specializationContainer.nativeElement.scroll({
      left: this.specializationContainer.nativeElement.scrollLeft - width,
      behavior: 'smooth',
    });
  }

  onViewIHS() {
    this.apiService
      .get(APP_URLs.GET_IHS_POLICY)
      .pipe(
        pluck('responseData'),
        map((data: any) => data[0]?.safetyCertificate)
      )
      .subscribe({
        next: (imgLink) => window.open(imgLink, '_blank'),
      });
  }

  get specializationCardWidth(): number {
    const width = getComputedStyle(
      this.specializationContainer.nativeElement.firstChild
    ).width;
    return +width.match(/(\d*)\w/)![1];
  }
  isEvenIndex(index: number): boolean {
    return index % 2 === 0;
  }
  ngOnDestroy() {}
}
