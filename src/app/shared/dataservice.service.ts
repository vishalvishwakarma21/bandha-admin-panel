import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import * as Rx from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class DataService {
  // endpoint: string = 'https://bandhan-laravel-api.herokuapp.com/public/api/v1';
  endpoint: string = 'https://bandhan.herokuapp.com/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  signInClicked = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
  }

  setloginLoader(data) {
    this.signInClicked.next(data);
  }


  loader() {
    // this.spinner.show("mySpinner", {
    //   type: "line-scale-party",
    //   size: "large",
    //   bdColor: "rgba(0, 0, 0, 1)",
    //   color: "white",
    //   template: "<img src='https://thumbs.gfycat.com/RewardingDisfiguredAnnelid-size_restricted.gif' />"
    // });
    this.spinner.show();
  }
  dismissLoder() {
    this.spinner.hide();
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
  schemeUpdate(scheme): Observable<any> {
    console.log("this is the angular -=-=-=-=-=-= schemeUpdated");
    let api = `${this.endpoint}/scheme/update`;
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
    console.log("this is the id of user =-=-=-=", id)
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

  userDetails(id) {
    let api = `${this.endpoint}/users/user-details`;
    let data = {
      user_id: id
    }
    return this.http.post(api, data, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //* Approval for the worker*/
  approvalStatus(storeId, clubId, userId) {
    let api = `${this.endpoint}/stores/worker/assign-store`;
    let data = {
      'store_id': storeId,
      'user_id': userId,
      'club_id': clubId,
      // 'is_approved':approveId
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
