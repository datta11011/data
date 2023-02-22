import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerQAComponent } from './manager-qa.component';

describe('ManagerQAComponent', () => {
  let component: ManagerQAComponent;
  let fixture: ComponentFixture<ManagerQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerQAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
