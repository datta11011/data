import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdProfileComponent } from './crowd-profile.component';

describe('CrowdProfileComponent', () => {
  let component: CrowdProfileComponent;
  let fixture: ComponentFixture<CrowdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
