import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{
  constructor(base : BaseService) {
    super(base.http);
   }
   getUsersById(id: any):Observable<any> {
    return this.getReq(`/users/${id}`);
  }
  getUserNamesByID(id: any):Observable<any> {
    return this.getReq(`/users/${id}/name`);
  }

   getUsers():Observable<any>{
    return this.getReq('/users');
   }
   addUser(data:any):Observable<UserModel>{
    return this.postReq('/users',data);
   }
    updateUser(id:number,data:any):Observable<UserModel>{
    return this.putReq(`/users/${id}`, data);
    }
    deleteUser(id:number):Observable<UserModel>{
      return this.deleteReq('/users', id);
    }
}
