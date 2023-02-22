import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsTimespentComponent } from './programs-timespent.component';

describe('ProgramsTimespentComponent', () => {
  let component: ProgramsTimespentComponent;
  let fixture: ComponentFixture<ProgramsTimespentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsTimespentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsTimespentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
