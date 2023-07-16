import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import {CommentModel } from '../models/comment-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService{

  constructor(base : BaseService){
    super(base.http);
   }
    getComments():Observable<CommentModel[]>{
      return this.getReq('/comments');
    }
    getCommentByPostId(post_id:number):Observable<CommentModel[]>{
      return this.getReq('/comments?post_id='+post_id);
    }
    addComment(comment:CommentModel):Observable<CommentModel>{
      return this.postReq('/comments',comment);
    }
    updateComment(id:number,comment:CommentModel):Observable<CommentModel>{
      return this.putReq('/comments/'+id,comment);
    }
    deleteComment(id:number):Observable<CommentModel>{
      return this.deleteReq('/comments',id);
    }
    getComment(id:number):Observable<CommentModel>{
      return this.getReq('/comments/'+id);
    }
    
}
