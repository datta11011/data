import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareulComponent } from './shareul.component';

describe('ShareulComponent', () => {
  let component: ShareulComponent;
  let fixture: ComponentFixture<ShareulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
