import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassificationTableComponent } from './product-classification-table.component';

describe('ProductClassificationTableComponent', () => {
  let component: ProductClassificationTableComponent;
  let fixture: ComponentFixture<ProductClassificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClassificationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductClassificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
