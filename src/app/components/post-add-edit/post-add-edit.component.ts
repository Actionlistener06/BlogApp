import { Component,Inject,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.css']
})
export class PostAddEditComponent implements OnInit{
  postForm:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private postService: PostService,
    private userService: UserService,
    private categoryService: CategoryService,

    private dialogRef: MatDialogRef<PostAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.postForm = this._fb.group({
      user_id: [''],
      category_id: [''],
      title: [''],
      content: [''],
      view_count: [''],
      creation_date: [''],
      is_published: ['']
    });
   }
   ngOnInit(): void {
    if(this.data){
      this.postForm.patchValue(this.data);
  
    }
   }

   onFormSubmit(){
    if(this.postForm.valid){
    if(this.data){
    this.postService.updatePost(this.data.id,this.postForm.value).subscribe({
      next: (val:any) => {
        alert("Post updated successfully");
        this.dialogRef.close(true);
      },
      error: (error:any) => {
        console.log(error);
      },
  });
    }else
      this.postService.addPost(this.postForm.value).subscribe({
        next: (val:any) => {
          alert("Post added successfully");
          this.dialogRef.close(true);
        },
        error: (error:any) => {
          console.log(error);
        },
    });
   }}


}
