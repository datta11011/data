import { ComponentFixture, TestBed } from '@angular/core/testing';

import { topNavComponent } from "./top-nav.component";

describe('TopNavComponent', () => {
  let component: topNavComponent;
  let fixture: ComponentFixture<topNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ topNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(topNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
