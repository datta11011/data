import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousVehicleComponent } from './autonomous-vehicle.component';

describe('AutonomousVehicleComponent', () => {
  let component: AutonomousVehicleComponent;
  let fixture: ComponentFixture<AutonomousVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomousVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomousVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
