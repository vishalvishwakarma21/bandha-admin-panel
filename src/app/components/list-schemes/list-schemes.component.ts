import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-schemes',
  templateUrl: './list-schemes.component.html',
  styleUrls: ['./list-schemes.component.css']
})
export class ListSchemesComponent implements OnInit {
  schemes: any;

  constructor(private dataService: DataService, private tostr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.getSchemes();
  }



  getSchemes() {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getSchemes('').subscribe(res => {
      this.schemes = res.data.data;
      console.log("this is the-=-=", this.schemes)
    })
  }
  editSchemesFunction(id) {
    this.router.navigate(['edit-schemes/' + id])
  }
}
