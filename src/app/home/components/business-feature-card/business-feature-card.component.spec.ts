import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFeatureCardComponent } from './business-feature-card.component';

describe('BusinessFeatureCardComponent', () => {
  let component: BusinessFeatureCardComponent;
  let fixture: ComponentFixture<BusinessFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessFeatureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
