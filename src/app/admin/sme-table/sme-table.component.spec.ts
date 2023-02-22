import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeTableComponent } from './sme-table.component';

describe('SmeTableComponent', () => {
  let component: SmeTableComponent;
  let fixture: ComponentFixture<SmeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
