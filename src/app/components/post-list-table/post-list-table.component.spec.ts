import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListTableComponent } from './post-list-table.component';

describe('PostListTableComponent', () => {
  let component: PostListTableComponent;
  let fixture: ComponentFixture<PostListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListTableComponent]
    });
    fixture = TestBed.createComponent(PostListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
