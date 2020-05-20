import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './dataservice.service';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'https://bandhan-laravel-api.herokuapp.com/public/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService,
    private dataService: DataService
  ) {
  }


  // Sign-in
  signIn(user: User) {
    // this.dataService.loader();
    this.dataService.setloginLoader(true);
    return this.http.post<any>(`${this.endpoint}/login`, user).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    ).subscribe((res: any) => {
      // console.log("this is the loader begin")
      // this.dataService.dismissLoder()
      this.dataService.setloginLoader(false);
      if (res.success != "1") {
        this.toastr.error(res.message);
      } else {
        if (res.data.user_role.name == 'management' || res.data.user_role.name == 'administrator') {
          this.toastr.success(res.message);
          this.dataService.dismissLoder()
          localStorage.setItem('access_token', res.data.api_token)
          localStorage.setItem('user_name', res.data.name)
          this.currentUser = res;
          this.router.navigate(['dashboard']);
        }
        else {
          this.toastr.warning("No Privilege Assigned!");
        }
      }
    })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }


  getUserName() {
    return localStorage.getItem('user_name');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }


  handleError = (error: HttpErrorResponse) => {
    let msg = '';
    this.dataService.dismissLoder();
    this.dataService.setloginLoader(false);
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.toastr.error(error.error.message);

      if (error.status == 401) {
        this.toastr.error("Unauthenticated");
        this.router.navigate(['login']);
      }
    }
    return throwError(msg);
  }

}