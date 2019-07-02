import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  emailSignup: string;
  passwordSignup: string;

  constructor(private fb: FormBuilder, private auth: AuthService) { 
    auth.getCurrentLoggedIn();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      emailSignup: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordSignup: new FormControl('', [
        Validators.pattern('^ (?=.* [0–9])(?=.* [a - zA - Z])([a - zA - Z0–9] +)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ])
    });
  }

  signup(): void {
    console.log(this.userForm.value.emailSignup);
    console.log(this.userForm.value.passwordSignup);
    
    this.auth.emailSignUp(this.userForm.value.emailSignup, this.userForm.value.passwordSignup)
  }

}
