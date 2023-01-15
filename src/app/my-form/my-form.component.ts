import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})

export class MyFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  myForm: FormGroup;
  constructor(public fb: FormBuilder) {
    // this.myForm = new FormGroup({
    //   "name": new FormControl("John", Validators.required),
    //   "surname": new FormControl("Due", Validators.required),
    //   "password": new FormControl("", Validators.required),
    // });

    this.myForm = this.fb.group({
      name: ["John", [Validators.required]],
      surname: [,[Validators.required]],
      password: [,[Validators.required]],
    });

   
  }

  ngOnInit(): void {
  }

  getFormControl(el:string){
    return this.myForm.controls[el];
  }
  sendForm(){
    console.log(this.myForm);
  }
  reset(){
    this.myForm.reset();
  }

}
