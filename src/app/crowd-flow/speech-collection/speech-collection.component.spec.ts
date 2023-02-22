import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechCollectionComponent } from './speech-collection.component';

describe('SpeechCollectionComponent', () => {
  let component: SpeechCollectionComponent;
  let fixture: ComponentFixture<SpeechCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
