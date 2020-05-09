import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(private dataService: DataService, private tostr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getUsers().subscribe(res => {
      this.users = res.data.data;
    })
  }
  deleteUser(id) {
    console.log("this is the delete row id-=-=--=", id);
    this.dataService.deleteUsers(id).subscribe((res) => {
      console.log("your id is deleted-=-=-=", res);
      if (res) {
        this.getUsers();
      }
    })
  }

}
