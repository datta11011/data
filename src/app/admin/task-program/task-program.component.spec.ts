import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgramComponent } from './task-program.component';

describe('TaskProgramComponent', () => {
  let component: TaskProgramComponent;
  let fixture: ComponentFixture<TaskProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
