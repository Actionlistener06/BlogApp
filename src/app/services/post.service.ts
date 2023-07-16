import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import {PostModel } from '../models/post-model';


@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService{
  constructor(base : BaseService) {
    super(base.http);
   }
  deletePost(id: number): Observable<PostModel> {
    return this.deleteReq('/posts',id);
  }
  updatePost(id: any, value: any): Observable<PostModel> {
    return this.putReq(`/posts/${id}`, value);
  }
  addPost(value: any): Observable<PostModel> {
    return this.postReq('/posts', value);
  }
   getPosts():Observable<PostModel[]>{
    return this.getReq('/posts');
}
   getPost(id: number): Observable<PostModel> {
  return this.getReq(`/posts/${id}`);
}
  getPoststoFilter():Observable<PostModel[]>{
    return this.getReq('/posts');
  }
}
