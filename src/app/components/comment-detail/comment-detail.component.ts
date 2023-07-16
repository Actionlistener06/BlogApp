import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from 'src/app/models/comment-model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  comment_id!: number;
  comment!:CommentModel;
  constructor(
    private activatedRoute:ActivatedRoute,
    private commentService:CommentService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.comment_id = params['id'];
    });
   }
   ngOnInit():void {
    this.getComment();
   }

   getComment(){
    this.commentService.getComment(this.comment_id).subscribe(
      (data:any) => {
        this.comment=data;
      })
    }     
}
