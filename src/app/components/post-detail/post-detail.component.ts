import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/models/post-model';
import { PostService } from 'src/app/services/post.service';
import { find, map } from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';
import { CommentModel } from 'src/app/models/comment-model';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user-model';
import { CategoryModel } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post_id!: number;
  post!:any;
  comments:any;
  user!:any;
  category!:CategoryModel;
  displayedColumns: string[] = ['id', 'comment', 'creation_date', 'is_confirmed'];
  constructor(private activatedRoute:ActivatedRoute,
    private commentService:CommentService,
    private postService:PostService,
    private userService:UserService,
    private categoryService:CategoryService) {
      
      this.activatedRoute.params.subscribe(params => {
        this.post_id = params['id'];
      });   
      
   }
       ngOnInit()  { 
       this.getPost();
       this.getComment();
    }  
      getPost(){  
      this.postService.getPost(this.post_id).subscribe(
        (data:PostModel) => {
          this.post = data;
        })
        
      }
       getComment(){
        this.commentService.getCommentByPostId(this.post_id).subscribe(
          (data:CommentModel[]) => {
            this.comments = data;      
          })
      }
    
      async getUsersById(id:number){
        if(!this.post_id){
          await this.getPost();
        }
        this.userService.getUsersById(id).subscribe(
          (data:any) => {
            this.user = data;
          })
      }
       getCategoryById(id:number){      
       this.categoryService.getCategory(id).subscribe(
          (data:any) => {
            this.category = data;
          })       
      }
}
