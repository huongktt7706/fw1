import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: '',
      email: '', 
      password: '',
    });
  }

  submitForm() {
    console.log(this.registerForm.value);
  }

  get password() {
    return this.registerForm.get('password');
  }
}