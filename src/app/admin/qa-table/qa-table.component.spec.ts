import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QATableComponent } from './qa-table.component';

describe('QATableComponent', () => {
  let component: QATableComponent;
  let fixture: ComponentFixture<QATableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QATableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QATableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
