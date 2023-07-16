import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTableComponent } from './user-list-table.component';

describe('UserListTableComponent', () => {
  let component: UserListTableComponent;
  let fixture: ComponentFixture<UserListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListTableComponent]
    });
    fixture = TestBed.createComponent(UserListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
