import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestiveDataComponent } from './festive-data.component';

describe('FestiveDataComponent', () => {
  let component: FestiveDataComponent;
  let fixture: ComponentFixture<FestiveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestiveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
