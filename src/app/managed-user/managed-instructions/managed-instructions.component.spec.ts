import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedInstructionsComponent } from './managed-instructions.component';

describe('ManagedInstructionsComponent', () => {
  let component: ManagedInstructionsComponent;
  let fixture: ComponentFixture<ManagedInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
