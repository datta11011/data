import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonTaskCardComponent } from './amazon-task-card.component';

describe('AmazonTaskCardComponent', () => {
  let component: AmazonTaskCardComponent;
  let fixture: ComponentFixture<AmazonTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
