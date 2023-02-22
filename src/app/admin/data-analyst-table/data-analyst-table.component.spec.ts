import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalystTableComponent } from './data-analyst-table.component';

describe('DataAnalystTableComponent', () => {
  let component: DataAnalystTableComponent;
  let fixture: ComponentFixture<DataAnalystTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalystTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalystTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
