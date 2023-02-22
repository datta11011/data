import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QADashboardComponent } from './qa-dashboard.component';

describe('QADashboardComponent', () => {
  let component: QADashboardComponent;
  let fixture: ComponentFixture<QADashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QADashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
