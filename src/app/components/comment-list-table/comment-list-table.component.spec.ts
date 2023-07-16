import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListTableComponent } from './comment-list-table.component';

describe('CommentListTableComponent', () => {
  let component: CommentListTableComponent;
  let fixture: ComponentFixture<CommentListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentListTableComponent]
    });
    fixture = TestBed.createComponent(CommentListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
