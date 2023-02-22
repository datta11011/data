import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimespentSmeComponent } from './timespent-sme.component';

describe('TimespentSmeComponent', () => {
  let component: TimespentSmeComponent;
  let fixture: ComponentFixture<TimespentSmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimespentSmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimespentSmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
