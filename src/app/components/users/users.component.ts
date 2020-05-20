import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  username: any;
  userId: any;
  constructor(private dataService: DataService, private tostr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getUsers().subscribe(res => {
      this.users = res.data.data;
      this.username = res.data.data
      console.log("this is the users -=-=-=-=", this.username)
    })
  }
  deleteUser(Id) {
    console.log("this is the delete row id-=-=--=", Id);
    this.dataService.deleteUsers(Id).subscribe((res) => {
      if (res) {
        console.log("your id is deleted-=-=-=", res);
        $("#myModal").modal("hide");
        this.getUsers();
      }
    })
  }

  gotoDetails(id) {
    console.log("this is the details page -=-=-=", id)
    this.router.navigate(['/userdetails', id]);
    console.log("this is the details page2 -=-=-=", id)
  }

  showModal(id) {
    console.log("this is the open modal", id)
    this.userId = id;
    $("#myModal").modal("show");
    // this.userId = id;
    // this.largeModal.show();
  }

}
