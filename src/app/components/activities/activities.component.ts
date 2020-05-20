import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activity: any = [];
  openmodal: any;
  activity_Id: any;
  pages: any = 1;
  limit: any;
  page: number;


  constructor(private dataService: DataService, private tostr: ToastrService) { }

  ngOnInit(): void {
    this.getActivity();
  }


  pageChange(page) {
    this.pages = page;
  }
  getActivity() {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getActivity().subscribe(res => {
      this.activity = res.data.data;
      this.limit = res.data.meta.count;
      this.page = 15;
      console.log("this is the-=-=", this.activity)
    })
  }

  onChange(changevalue, text) {
    console.log("Selected item change value: ", changevalue, "this is activity id[-=", text);
    this.openmodal = changevalue;
    this.activity_Id = text;
  }
  closeModal() {
    $('#sureModal').hide()
  }
  approve() {
    this.dataService.updateActivity(this.openmodal, this.activity_Id).subscribe((res) => {
      console.log('this is the activity -=-=-=-=', res);
      if (res) {
        $('#sureModal').hide();
      }
    })
  }

}
