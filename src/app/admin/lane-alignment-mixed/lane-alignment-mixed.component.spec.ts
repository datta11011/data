import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneAlignmentMixedComponent } from './lane-alignment-mixed.component';

describe('LaneAlignmentMixedComponent', () => {
  let component: LaneAlignmentMixedComponent;
  let fixture: ComponentFixture<LaneAlignmentMixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaneAlignmentMixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaneAlignmentMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
