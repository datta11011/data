import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTaskpageComponent } from './manager-taskpage.component';

describe('ManagerTaskpageComponent', () => {
  let component: ManagerTaskpageComponent;
  let fixture: ComponentFixture<ManagerTaskpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTaskpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTaskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
