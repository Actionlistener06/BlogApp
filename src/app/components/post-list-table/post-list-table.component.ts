import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {PostModel} from 'src/app/models/post-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PostAddEditComponent } from '../post-add-edit/post-add-edit.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.css'],
})
export class PostListTableComponent implements OnInit {
  displayedColumns: string[] = ["id", "title", "view_count", "creation_date", "is_published"];
    
  dataSource!: MatTableDataSource<PostModel>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private postService: PostService,
    private _dialog:MatDialog,
    private router:Router) {
    
    }   
  
  ngOnInit():void {
    this.getPosts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditDialog() {
    const dialogRef=this._dialog.open(PostAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
      if(val){
      this.getPosts();
      }}}
    );
  }  
  openEditForm(data: any) {
    this._dialog.open(PostAddEditComponent, {
      data,
    });
  }
  getPosts(){
    this.postService.getPosts().subscribe({
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
  deletePost(id:number){
    this.postService.deletePost(id).subscribe({
      next: (val:any) => {
        alert("Post deleted successfully");
        this.getPosts();
      },
      error: (error:any) => {
        console.log(error);
      },});
  }
  openDetail(id:number){
    this.router.navigate(['/posts/post/',id]);
  }
}

