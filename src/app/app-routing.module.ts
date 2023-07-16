import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { PostListTableComponent } from './components/post-list-table/post-list-table.component';
import { CategoryListTableComponent } from './components/category-list-table/category-list-table.component';
import { CommentListTableComponent } from './components/comment-list-table/comment-list-table.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';

const approutes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UserListTableComponent},
  {path:'posts',component:PostListTableComponent},
  {path:'categories',component:CategoryListTableComponent},
  {path:'comments',component:CommentListTableComponent},
  {path:'posts/post/:id',component:PostDetailComponent},
  {path:'categories/category/:id',component:CategoryDetailComponent},
  {path:'comments/comment/:id',component:CommentDetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }