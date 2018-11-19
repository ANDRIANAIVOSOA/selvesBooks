import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(
    private autService: AuthService,
    private router: Router,
    private formBuild: FormBuilder 
  ) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm(){
    this.signInForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.autService.signInUser(email, password)
      .then(() =>{  
        this.router.navigate(['/books'])
      }, (error) => {
        this.errorMessage = error;
      }
      );
  }
}
