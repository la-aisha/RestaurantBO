import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysupplierComponent } from './categorysupplier.component';

describe('CategorysupplierComponent', () => {
  let component: CategorysupplierComponent;
  let fixture: ComponentFixture<CategorysupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
