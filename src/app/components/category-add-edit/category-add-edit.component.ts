import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-comment-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit{
  categoryForm:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private categoryService: CategoryService,

    private dialogRef: MatDialogRef<CategoryAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.categoryForm = this._fb.group({
      name: [''],
      creation_date: [''],
    });
   }
   ngOnInit(): void {
    if(this.data){
      this.categoryForm.patchValue(this.data);
  
    }
   }

   onFormSubmit(){
    if(this.categoryForm.valid){
    if(this.data){
    this.categoryService.updateCategory(this.data.id,this.categoryForm.value).subscribe({
      next: (val:any) => {
        alert("Category updated successfully");
        this.dialogRef.close(true);
      },
      error: (error:any) => {
        console.log(error);
      },
  });
    }else
      this.categoryService.addCategory(this.categoryForm.value).subscribe({
        next: (val:any) => {
          alert("Category added successfully");
          this.dialogRef.close(true);
        },
        error: (error:any) => {
          console.log(error);
        },
    });
   }}
}
