import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFinaldashboardComponent } from './manager-finaldashboard.component';

describe('ManagerFinaldashboardComponent', () => {
  let component: ManagerFinaldashboardComponent;
  let fixture: ComponentFixture<ManagerFinaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFinaldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerFinaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
