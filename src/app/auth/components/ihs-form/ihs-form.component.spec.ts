import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhsFormComponent } from './ihs-form.component';

describe('IhsFormComponent', () => {
  let component: IhsFormComponent;
  let fixture: ComponentFixture<IhsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IhsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
