import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedDashboardComponent } from './managed-dashboard.component';

describe('ManagedDashboardComponent', () => {
  let component: ManagedDashboardComponent;
  let fixture: ComponentFixture<ManagedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
