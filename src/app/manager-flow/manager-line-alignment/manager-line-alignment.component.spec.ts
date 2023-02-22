import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLineAlignmentComponent } from './manager-line-alignment.component';

describe('ManagerLineAlignmentComponent', () => {
  let component: ManagerLineAlignmentComponent;
  let fixture: ComponentFixture<ManagerLineAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLineAlignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLineAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
