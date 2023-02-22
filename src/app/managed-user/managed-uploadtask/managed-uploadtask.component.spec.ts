import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedUploadtaskComponent } from './managed-uploadtask.component';

describe('ManagedUploadtaskComponent', () => {
  let component: ManagedUploadtaskComponent;
  let fixture: ComponentFixture<ManagedUploadtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedUploadtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedUploadtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
