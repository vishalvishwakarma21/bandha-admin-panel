import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  // endpoint: string = 'https://bandhan-laravel-api.herokuapp.com/public/api/v1';
  endpoint: string = 'https://bandhan.herokuapp.com/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService
  ) {
  }
  getUsers(): Observable<any> {
    let api = `${this.endpoint}/users`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getCategories(): Observable<any> {
    let api = `${this.endpoint}/categories`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getStores(): Observable<any> {
    let api = `${this.endpoint}/stores/list`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  addStore(form): Observable<any> {
    let api = `${this.endpoint}/store/add`;
    return this.http.post(api, form, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


  getRoles(): Observable<any> {
    let api = `${this.endpoint}/users/roles`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


  addUser(user): Observable<any> {
    user.active = "1";
    let api = `${this.endpoint}/users/store`;
    return this.http.post(api, user, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  schemeCreate(scheme): Observable<any> {
    console.log("this is the angular -=-=-=-=-=-= schemeCreate");
    // scheme.active = "1";
    let api = `${this.endpoint}/scheme/create`;
    return this.http.post(api, scheme, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(Response);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getSchemes(scheme): Observable<any> {
    console.log("this is the angular -=-=-=-=-=-= schemeCreate");
    // scheme.active = "1";
    let api = `${this.endpoint}/scheme/fetch`;
    return this.http.post(api, scheme, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(Response);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getActivity(): Observable<any> {
    console.log("this is the angular -=-=-=-=-=-= schemeCreate");
    // scheme.active = "1";
    let api = `${this.endpoint}/activity/fetch`;
    return this.http.post(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(Response);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  deleteUsers(id): Observable<any> {
    let api = `${this.endpoint}/users/delete`;
    let data = {
      'user_id': id
    }
    return this.http.post(api, data, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  updateActivity(statusId, activityId): Observable<any> {
    console.log("this is the angular -=-=-=-=-=-= schemeCreate");
    let api = `${this.endpoint}/update/activity/status`;
    let data = {
      'activity_id': activityId,
      'status_id': JSON.parse(statusId),

    }
    return this.http.post(api, data, { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(Response);
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


  // Error 
  handleError = (error: HttpErrorResponse) => {
    let msg = '';
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
