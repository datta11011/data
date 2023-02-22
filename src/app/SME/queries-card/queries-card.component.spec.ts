import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesCardComponent } from './queries-card.component';

describe('QueriesCardComponent', () => {
  let component: QueriesCardComponent;
  let fixture: ComponentFixture<QueriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
