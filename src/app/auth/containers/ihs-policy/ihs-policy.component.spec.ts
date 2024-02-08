import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhsPolicyComponent } from './ihs-policy.component';

describe('IhsPolicyComponent', () => {
  let component: IhsPolicyComponent;
  let fixture: ComponentFixture<IhsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IhsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
