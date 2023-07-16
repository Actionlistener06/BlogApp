
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-add-edit',
  templateUrl: './comment-add-edit.component.html',
  styleUrls: ['./comment-add-edit.component.css']
})
export class CommentAddEditComponent implements OnInit{
  commentForm:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private commentService: CommentService,

    private dialogRef: MatDialogRef<CommentAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.commentForm = this._fb.group({
      post_id: [''],
      user_id: [''],
      comment: [''],
      creation_date: [''],
      is_confirmed: [''],
    });
   }
   ngOnInit(): void {
    if(this.data){
      this.commentForm.patchValue(this.data);
  
    }
   }

   onFormSubmit(){
    if(this.commentForm.valid){
    if(this.data){
    this.commentService.updateComment(this.data.id,this.commentForm.value).subscribe({
      next: (val:any) => {
        alert("Comment updated successfully");
        this.dialogRef.close(true);
      },
      error: (error:any) => {
        console.log(error);
      },
  });
    }else
      this.commentService.addComment(this.commentForm.value).subscribe({
        next: (val:any) => {
          alert("Comment added successfully");
          this.dialogRef.close(true);
        },
        error: (error:any) => {
          console.log(error);
        },
    });
   }}

}
