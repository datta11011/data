import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAProgramComponent } from './qa-program.component';

describe('QAProgramComponent', () => {
  let component: QAProgramComponent;
  let fixture: ComponentFixture<QAProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
