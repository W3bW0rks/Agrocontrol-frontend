import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStoreComponent } from './products-store.component';

describe('ProductsStoreComponent', () => {
  let component: ProductsStoreComponent;
  let fixture: ComponentFixture<ProductsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
