import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddEditComponent } from './category-add-edit.component';

describe('CategoryAddEditComponent', () => {
  let component: CategoryAddEditComponent;
  let fixture: ComponentFixture<CategoryAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAddEditComponent]
    });
    fixture = TestBed.createComponent(CategoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
