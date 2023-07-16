
import { Component,Inject,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  userForm:FormGroup;

  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.userForm = this._fb.group({
      username: [''],
      email: [''],
      creation_date: [''],
      is_active: ['']
    });
   }
   ngOnInit(): void {
    if(this.data){
      this.userForm.patchValue(this.data);
    }
   }
   onFormSubmit(){
    if(this.userForm.valid){
    if(this.data){
    this.userService.updateUser(this.data.id,this.userForm.value).subscribe({
      next: (val:any) => {
        alert("User updated successfully");
        this.dialogRef.close(true);
      },
      error: (error:any) => {
        console.log(error);
      },
  });
    }else
    
      this.userService.addUser(this.userForm.value).subscribe({
        next: (val:any) => {
          alert("User added successfully");
          this.dialogRef.close(true);
        },
        error: (error:any) => {
          console.log(error);
        },
    });
   }}
  }

