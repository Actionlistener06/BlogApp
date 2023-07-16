import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/models/post-model';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {
  category_id!: number;
  posts!:MatTableDataSource<PostModel>;
  postCount:number=0;
  category_name!:string;
  displayedColumns: string[] = ['id', 'title', 'view_count', 'creation_date', 'is_published'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;
  constructor(private activatedRoute:ActivatedRoute,
    private postService:PostService,
    private categoryService:CategoryService) {
      this.activatedRoute.params.subscribe(params => {
        this.category_id = params['id'];
      });
}
ngOnInit():void {
  this.getPost(this.category_id);
  this.getCategoryName(this.category_id);
}
getPost(category_id:number){
  this.postService.getPoststoFilter().subscribe(
    (data:PostModel[]) => {
      this.posts = new MatTableDataSource(data.filter(x=>x.category_id==category_id));
      this.postCount = this.posts.data.length;
      this.posts.paginator = this.paginator;
      this.posts.sort = this.sort;
    }
  )
}
getCategoryName(category_id:number){
  this.categoryService.getCategory(category_id).subscribe(
    (data:any) => {
      data.filter(this.category_id = data.id);
      this.category_name = data.name;
    })
  }
}

