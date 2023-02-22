import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionimageTableComponent } from './data-collectionimage-table.component';

describe('DataCollectionimageTableComponent', () => {
  let component: DataCollectionimageTableComponent;
  let fixture: ComponentFixture<DataCollectionimageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCollectionimageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCollectionimageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
