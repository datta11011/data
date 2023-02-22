import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedTaskpageComponent } from './managed-taskpage.component';

describe('ManagedTaskpageComponent', () => {
  let component: ManagedTaskpageComponent;
  let fixture: ComponentFixture<ManagedTaskpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedTaskpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedTaskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
