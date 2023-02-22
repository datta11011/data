import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsProgressbarComponent } from './analytics-progressbar.component';

describe('AnalyticsProgressbarComponent', () => {
  let component: AnalyticsProgressbarComponent;
  let fixture: ComponentFixture<AnalyticsProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsProgressbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
