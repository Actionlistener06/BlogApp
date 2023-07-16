import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import {CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{
  getCategoryById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private base : BaseService ) {
    super(base.http);
   }
    getCategories():Observable<CategoryModel[]>{
      return this.getReq('/categories');
    }
    updateCategory(id:number,category:CategoryModel):Observable<CategoryModel>{
      return this.putReq('/categories/'+id,category);
    }
    addCategory(category:CategoryModel):Observable<CategoryModel>{
      return this.postReq('/categories',category);
    }
    getCategory(id:number):Observable<CategoryModel>{
      return this.getReq('/categories/'+id);
    }
    deleteCategory(id:number):Observable<CategoryModel>{
      return this.deleteReq('/categories',id);
    }

}
