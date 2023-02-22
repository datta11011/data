import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSmeComponent } from './manager-sme.component';

describe('ManagerSmeComponent', () => {
  let component: ManagerSmeComponent;
  let fixture: ComponentFixture<ManagerSmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerSmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerSmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
