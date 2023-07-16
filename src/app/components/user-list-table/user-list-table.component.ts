import { Component, Output} from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';
import { AfterViewInit,  EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css'],
  providers: []
})
export class UserListTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'creation_date', 'is_active'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private userService: UserService,private _dialog:MatDialog,
    private postService: PostService,
    private commentService: CommentService,) {
  }
  ngOnInit():void {
    this.getUsers();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditDialog() {
    const dialogRef=this._dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
      if(val){
      this.getUsers();
      }
      }
    }
    );
  }
  
  openEditForm(data: any) {
    this._dialog.open(UserAddEditComponent, {
      data,
    });
  }
  getUsers(){
    this.userService.getUsers().subscribe({
      next: (val:any) => {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error:any) => {
        console.log(error);
      },
  });
  }
  deleteUser(id:number){
  if(this.postService.getPosts().subscribe((data:any) => {
    data.filter((x:any) => x.user_id==id);
    data.length>0
  })){
      window.alert("You cannot delete this user because he/she has posts"); 
  }
  else if(this.commentService.getComments().subscribe((data:any) => {
    data.filter((x:any) => x.user_id==id);
    data.length>0
  })){
      window.alert("You cannot delete this user because he/she has comments");
  }
  else if(this.dataSource.data.length==1){
      window.alert("You cannot delete the last user");
    }
    else{
    this.userService.deleteUser(id).subscribe({
      next: (val:any) => {
        alert("User deleted successfully");
        this.getUsers();
      },
      error: (error:any) => {
        console.log(error);
      },
  }); }
 }
}

