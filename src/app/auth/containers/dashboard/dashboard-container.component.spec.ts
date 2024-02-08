import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContainerComponent } from './dashboard-container.component';
import {DashboardService} from '../../services/dashboard.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {DEFAULT_PROJECT_IMAGE} from '../../../home/models/project';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;
  let el: DebugElement;
  let dashboardService: any;
  const dashboardServiceSpy = jasmine.createSpyObj(DashboardService, ['getConstructionProjects'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContainerComponent ],
      providers: [
        {
          provide: DashboardService,
          useValue: dashboardServiceSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    dashboardService = TestBed.inject(DashboardService);

  });

  fit('should create', () => {
    // component.projects$ = of([
    //   {
    //     id: 1,
    //     name: 'Private Home',
    //     imgUrl: DEFAULT_PROJECT_IMAGE,
    //     tags: ['Commercial', 'Renovation']
    //   }
    // ]);
    // fixture.detectChanges();
    //
    dashboardService.getConstructionProjects.and.returnValue(of([
        {
          id: 1,
          name: 'Private Home',
          imgUrl: DEFAULT_PROJECT_IMAGE,
          tags: ['Commercial', 'Renovation']
        },
      {
        id: 2,
        name: 'Private Home',
        imgUrl: DEFAULT_PROJECT_IMAGE,
        tags: ['Commercial', 'Renovation']
      }
    ]));
    //
    fixture.detectChanges();
    // fixture.detectChanges();
    // component.projects$.subscribe(console.log);
    //
    const projects: DebugElement[] = el.queryAll(By.css('.dashboard-container__projects-item'));
    expect(projects.length).toBe(2);

    expect(component).toBeTruthy();
  });
});


