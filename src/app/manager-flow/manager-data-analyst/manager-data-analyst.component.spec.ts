import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDataAnalystComponent } from './manager-data-analyst.component';

describe('ManagerDataAnalystComponent', () => {
  let component: ManagerDataAnalystComponent;
  let fixture: ComponentFixture<ManagerDataAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDataAnalystComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDataAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
