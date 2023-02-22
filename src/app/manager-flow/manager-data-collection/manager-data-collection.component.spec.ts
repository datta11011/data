import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDataCollectionComponent } from './manager-data-collection.component';

describe('ManagerDataCollectionComponent', () => {
  let component: ManagerDataCollectionComponent;
  let fixture: ComponentFixture<ManagerDataCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDataCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDataCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
