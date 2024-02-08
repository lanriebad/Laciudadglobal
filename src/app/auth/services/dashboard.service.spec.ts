import {TestBed} from '@angular/core/testing';
import {DEFAULT_PROJECT_IMAGE} from '../../home/models/project';
import {DashboardService} from './dashboard.service';
import {ApiService} from '../../core/services/api.service';
import {ToastrService} from 'ngx-toastr';
import {of} from 'rxjs';

describe('Dashboard Service', () => {
  let dashboardService: DashboardService,
      apiService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DashboardService, {
        provide: ApiService,
        useValue: jasmine.createSpyObj(ApiService, ['get'])
      }]
    })
      .compileComponents();

    dashboardService = TestBed.inject(DashboardService);
    apiService = TestBed.inject(ApiService);
  })

  fit('should fetch all projects', () => {
    apiService.get.and.returnValue(of({
      responseData: [
        {
          id: 1,
          name: 'Private Home',
          imgUrl: DEFAULT_PROJECT_IMAGE,
          tags: ['Commercial', 'Renovation']
        },
        {
          id: 1,
          name: 'Private Home',
          imgUrl: DEFAULT_PROJECT_IMAGE,
          tags: ['Commercial', 'Renovation']
        }
      ]
    }));

    dashboardService.getConstructionProjects()
      .subscribe(projects => {
        expect(projects.length).toBe(2);
      })

    // let req: TestRequest = http.expectOne('/api/secure/get/construction/photos.json');


    // req.flush()
  });
});
