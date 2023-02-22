import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardCrowdComponent } from './final-dashboard-crowd.component';

describe('FinalDashboardCrowdComponent', () => {
  let component: FinalDashboardCrowdComponent;
  let fixture: ComponentFixture<FinalDashboardCrowdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDashboardCrowdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalDashboardCrowdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
