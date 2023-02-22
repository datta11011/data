import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesTasksComponent } from './queries-tasks.component';

describe('QueriesTasksComponent', () => {
  let component: QueriesTasksComponent;
  let fixture: ComponentFixture<QueriesTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
