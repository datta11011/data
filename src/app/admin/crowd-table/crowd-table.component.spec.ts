import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdTableComponent } from './crowd-table.component';

describe('CrowdTableComponent', () => {
  let component: CrowdTableComponent;
  let fixture: ComponentFixture<CrowdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
