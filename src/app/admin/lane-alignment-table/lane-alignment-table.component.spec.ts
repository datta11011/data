import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneAlignmentTableComponent } from './lane-alignment-table.component';

describe('LaneAlignmentTableComponent', () => {
  let component: LaneAlignmentTableComponent;
  let fixture: ComponentFixture<LaneAlignmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaneAlignmentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaneAlignmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
