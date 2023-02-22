import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCardPageComponent } from './amazon-card-page.component';

describe('AmazonCardPageComponent', () => {
  let component: AmazonCardPageComponent;
  let fixture: ComponentFixture<AmazonCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
