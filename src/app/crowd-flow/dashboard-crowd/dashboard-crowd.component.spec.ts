import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCrowdComponent } from './dashboard-crowd.component';

describe('DashboardCrowdComponent', () => {
  let component: DashboardCrowdComponent;
  let fixture: ComponentFixture<DashboardCrowdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCrowdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCrowdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
