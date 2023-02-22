import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCountCardComponent } from './user-count-card.component';

describe('UserCountCardComponent', () => {
  let component: UserCountCardComponent;
  let fixture: ComponentFixture<UserCountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
