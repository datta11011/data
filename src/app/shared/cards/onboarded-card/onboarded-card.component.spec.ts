import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardedCardComponent } from './onboarded-card.component';

describe('OnboardedCardComponent', () => {
  let component: OnboardedCardComponent;
  let fixture: ComponentFixture<OnboardedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
