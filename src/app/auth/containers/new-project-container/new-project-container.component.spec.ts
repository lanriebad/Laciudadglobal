import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectContainerComponent } from './new-project-container.component';

describe('NewProjectContainerComponent', () => {
  let component: NewProjectContainerComponent;
  let fixture: ComponentFixture<NewProjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
