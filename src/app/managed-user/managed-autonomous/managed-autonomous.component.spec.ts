import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedAutonomousComponent } from './managed-autonomous.component';

describe('ManagedAutonomousComponent', () => {
  let component: ManagedAutonomousComponent;
  let fixture: ComponentFixture<ManagedAutonomousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedAutonomousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedAutonomousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
