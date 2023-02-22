import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardComponent } from './final-dashboard.component';

describe('FinalDashboardComponent', () => {
  let component: FinalDashboardComponent;
  let fixture: ComponentFixture<FinalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
