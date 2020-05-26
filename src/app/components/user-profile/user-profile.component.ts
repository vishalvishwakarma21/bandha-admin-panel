import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;

  roles: any = [];
  constructor(public fb: FormBuilder,
    public dataService: DataService, private tostr: ToastrService) {

    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      mobile_no: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),
    });




  }

  ngOnInit() {
    this.getRoles();
  }
  ngOnDestroy() {
  }

  get f() {
    return this.userForm.controls;
  }
  getRoles() {
    this.tostr.info("Fetching Roles", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getRoles().subscribe(res => {
      this.roles = res.data;
      console.log("this is the data of the roles -=-=-=-=", this.roles)
    })
  }

  addUser() {
    this.dataService.addUser(this.userForm.value).subscribe(res => {

      if (res.success != "1") {
        this.tostr.warning(res.message);
      }
      else {
        this.tostr.success(res.message);
        this.userForm.reset();

      }

    });
  }
}
