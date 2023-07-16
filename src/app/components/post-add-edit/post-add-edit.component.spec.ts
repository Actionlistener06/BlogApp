import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddEditComponent } from './post-add-edit.component';

describe('PostAddEditComponent', () => {
  let component: PostAddEditComponent;
  let fixture: ComponentFixture<PostAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAddEditComponent]
    });
    fixture = TestBed.createComponent(PostAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
