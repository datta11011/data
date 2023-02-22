import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedFinaldashboardComponent } from './managed-finaldashboard.component';

describe('ManagedFinaldashboardComponent', () => {
  let component: ManagedFinaldashboardComponent;
  let fixture: ComponentFixture<ManagedFinaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedFinaldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedFinaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
