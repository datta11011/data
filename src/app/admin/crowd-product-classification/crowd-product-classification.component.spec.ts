import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdProductClassificationComponent } from './crowd-product-classification.component';

describe('CrowdProductClassificationComponent', () => {
  let component: CrowdProductClassificationComponent;
  let fixture: ComponentFixture<CrowdProductClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdProductClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdProductClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
