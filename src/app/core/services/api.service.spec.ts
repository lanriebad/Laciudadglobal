import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {ApiService} from './api.service';
import {DEFAULT_PROJECT_IMAGE} from '../../home/models/project';
import {ToastrService} from 'ngx-toastr';

describe('ApiService',  () => {
  let http: HttpTestingController,
      toastSoy: any,
      api: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, {
        provide: ToastrService,
        useValue: jasmine.createSpyObj(ToastrService, [
          'success', 'error'
        ])
      }]
    }).compileComponents();

    http = TestBed.inject(HttpTestingController);
    api = TestBed.inject(ApiService);
    toastSoy = TestBed.inject(ToastrService);
  });

  it('should get projects', () => {
    api.get('/api/secure/get/construction/photos.json')
      .subscribe((response: any) => {
        expect(response.responseData.length).toEqual(2);
      });

    const req: TestRequest = http.expectOne('/api/secure/get/construction/photos.json');
    req.flush({
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
    })
  });
});
