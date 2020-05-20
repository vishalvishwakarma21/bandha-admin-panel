import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/dataservice.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $;
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user_id: any;
  userInfo: {};
  stores: any;
  modalForm: any;
  storeId: any;
  clubId: any;
  approveId: any;

  constructor(public route: ActivatedRoute, private tostr: ToastrService, private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.route.params.subscribe(params => {
      this.user_id = params.id
      console.log("this is the user id -=-=-=-=-", this.user_id)
    });
  }

  ngOnInit(): void {
    this.userDetails(this.user_id);
    this.getStores();

    //*form start here */
    this.modalForm = this.fb.group({
      'club': new FormControl('', Validators.required),
      'store': new FormControl('', Validators.required)
    })

  }

  userDetails(user_id) {
    console.log("this is the userdetail function =-=-=-=-=", user_id);
    this.dataService.userDetails(this.user_id).subscribe((response) => {
      console.log("this is the response of the=-=-=-= ", response);
      if (response) {
        this.userInfo = response;
      }
    })
  }

  getStores() {
    // this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getStores().subscribe(res => {
      this.stores = res.data;
      console.log("this is the stores id -=-=-=-=-=-=", this.stores);
    })
  }

  //* this is the function for the store click  */
  storeEvent($event) {
    console.log("this is the store id click by admin-=-=-=-=-", $event);
    this.storeId = $event;
  }

  //* this is the function for the club click  */
  clubEvent($event) {
    console.log("this is the store id click by admin-=-=-=-=-", $event);
    this.clubId = $event;
  }

  confirmStatus() {
    console.log("this is the next page on clicking -=-=-=-=");
    this.dataService.approvalStatus(this.storeId, this.clubId, this.user_id).subscribe((data) => {
      console.log("this is the consirmstatus data-=-=-=", data);
      if (data) {
        this.tostr.info("Store Assigned", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
        $("#myModal").modal("hide");
        this.userDetails(this.user_id)
      }
    }, (err) => {
      console.log(err);
      $("#myModal").modal("hide");
    })
  }

}
