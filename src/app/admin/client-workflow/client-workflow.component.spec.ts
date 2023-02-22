import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWorkflowComponent } from './client-workflow.component';

describe('ClientWorkflowComponent', () => {
  let component: ClientWorkflowComponent;
  let fixture: ComponentFixture<ClientWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
