import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { PostListTableComponent } from './components/post-list-table/post-list-table.component';
import { CategoryListTableComponent } from './components/category-list-table/category-list-table.component';
import { CommentListTableComponent } from './components/comment-list-table/comment-list-table.component';
import { TabComponent } from './components/tab/tab.component';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PostAddEditComponent } from './components/post-add-edit/post-add-edit.component';
import { CategoryAddEditComponent } from './components/category-add-edit/category-add-edit.component';
import { CommentAddEditComponent } from './components/comment-add-edit/comment-add-edit.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { MatCardModule } from '@angular/material/card';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListTableComponent,
    PostListTableComponent,
    CategoryListTableComponent,
    CommentListTableComponent,
    TabComponent,
    HeaderComponent,
    FooterComponent,
    UserAddEditComponent,
    PostAddEditComponent,
    CategoryAddEditComponent,
    CommentAddEditComponent,
    PostDetailComponent,
    CategoryDetailComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
