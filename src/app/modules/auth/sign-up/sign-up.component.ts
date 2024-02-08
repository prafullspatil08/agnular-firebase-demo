import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegExpConstants } from '../../../core/constants/reg-exp-constants';
import { FirebaseService } from '../../../core/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signUpForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(RegExpConstants.EMAIL_PATTERN),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  signUp(){
    this.firebaseService.SignUp(this.email.value,this.password.value)
  }
}
