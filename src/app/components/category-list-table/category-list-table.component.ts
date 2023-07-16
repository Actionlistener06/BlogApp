import { Component, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModel } from 'src/app/models/category-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryAddEditComponent } from '../category-add-edit/category-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category-list-table',
  templateUrl: './category-list-table.component.html',
  styleUrls: ['./category-list-table.component.css']
})
export class CategoryListTableComponent {
  displayedColumns: string[] = ["id", "name", "creation_date"];
    
  dataSource!: MatTableDataSource<CategoryModel>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;

  constructor(private categoryService: CategoryService,
    private _dialog:MatDialog,
    private router:Router,
    private postService:PostService) {
    
  }
  ngOnInit():void {  
    this.getCategories();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditDialog() {
    const dialogRef=this._dialog.open(CategoryAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
      if(val){
      this.getCategories();
      }
      }
    }
    );
  }
  
  openEditForm(data: any) {
    this._dialog.open(CategoryAddEditComponent, {
      data,
    });
  }
  getCategories(){
    this.categoryService.getCategories().subscribe({
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
 
  deleteCategory(id:number){
    if(this.postService.getPoststoFilter()
    .subscribe((data:any) => {data.filter((x:any) => x.category_id==id);
      data.length>0})
    ){
      alert("Bu kategoriye ait postlar olduğu için silinemez!");
      return;
    }
    this.categoryService.deleteCategory(id).subscribe({
      next: (val:any) => {
        this.getCategories();
      },
      error: (error:any) => {
        console.log(error);
      },
  });
  }
  openDetail(id:number){
    this.router.navigate(['/categories/category/',id]);
  }

}
