import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdTaskComponent } from './crowd-task.component';

describe('CrowdTaskComponent', () => {
  let component: CrowdTaskComponent;
  let fixture: ComponentFixture<CrowdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
