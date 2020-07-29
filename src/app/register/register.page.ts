import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name: [null,Validators.required],
      password: [null,Validators.required],
    });
   }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }
}