import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  signinForm: FormGroup;


  constructor( public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {

      this.signinForm = this.fb.group({
        email: [''],
        password: ['']
      })


    }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }

}
