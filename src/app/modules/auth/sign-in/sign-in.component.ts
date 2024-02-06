import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegExpConstants } from '../../../core/constants/reg-exp-constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm!: FormGroup;
  showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signInForm = this.formBuilder.group({
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
    return this.signInForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  signIn(){
    
  }
}
