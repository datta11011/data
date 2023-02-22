import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesRequestsQaComponent } from './queries-requests-qa.component';

describe('QueriesRequestsQaComponent', () => {
  let component: QueriesRequestsQaComponent;
  let fixture: ComponentFixture<QueriesRequestsQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesRequestsQaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesRequestsQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
