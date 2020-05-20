import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/dataservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  signinForm: FormGroup;
  signclicked = false;
  subscription: Subscription


  constructor(public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private dataService: DataService
  ) {

    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })


  }

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loginUser() {
    this.signinForm.disable();
    this.signclicked = true;
    this.authService.signIn(this.signinForm.value)
    this.subscription = this.dataService.signInClicked.subscribe((data) => {
      if (data == false) {
        this.signclicked = false;
        this.signinForm.enable();
      }
    })
  }

}
