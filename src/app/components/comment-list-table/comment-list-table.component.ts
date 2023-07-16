import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommentModel } from 'src/app/models/comment-model';
import { CommentService } from 'src/app/services/comment.service';
import { CommentAddEditComponent } from '../comment-add-edit/comment-add-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list-table',
  templateUrl: './comment-list-table.component.html',
  styleUrls: ['./comment-list-table.component.css']
})
export class CommentListTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'creation_date', 'is_confirmed'];
  dataSource!: MatTableDataSource<CommentModel>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private commentService: CommentService,
    private _dialog:MatDialog,
    private router:Router) {
    
    }   
  
  ngOnInit():void {
    this.getComments();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditDialog() {
    const dialogRef=this._dialog.open(CommentAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
      if(val){
      this.getComments();
      }
      }
    }
    );
  }
  
  openEditForm(data: any) {
    this._dialog.open(CommentAddEditComponent, {
      data,
    });
  }
  getComments(){
    this.commentService.getComments().subscribe({
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
  deleteComment(id:number){
    this.commentService.deleteComment(id).subscribe({
      next: (val:any) => {
        alert("Comment deleted successfully");
        this.getComments();
      },
      error: (error:any) => {
        console.log(error);
      },
  });
  }
  openDetail(id:number){
    this.router.navigate(['/comments/comment/', id]);

  }
}

