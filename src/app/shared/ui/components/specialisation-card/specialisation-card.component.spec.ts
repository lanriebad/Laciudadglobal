import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationCardComponent } from './specialisation-card.component';

describe('SpecialisationCardComponent', () => {
  let component: SpecialisationCardComponent;
  let fixture: ComponentFixture<SpecialisationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialisationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialisationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
