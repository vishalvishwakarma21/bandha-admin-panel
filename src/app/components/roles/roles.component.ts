import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: any = [];

  constructor(private dataService:DataService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getRoles();
  }



  getRoles() {
    this.toastr.info("Loading...","",{progressBar:true,progressAnimation:'increasing',timeOut:1000});
    this.dataService.getRoles().subscribe(res => {

      this.roles = res.data;
      
    })
  }
}
