import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {

  storeForm: FormGroup;

  categories: any = [];
  constructor(public fb: FormBuilder, public dataService: DataService, private tostr: ToastrService) {

    this.storeForm = this.fb.group({
      store_image: new FormControl(null, [Validators.required]),
      store_name: new FormControl(null, [Validators.required]),
      store_manager_name: new FormControl(null, [Validators.required]),
      store_category: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });

  }

  ngOnInit() {
    this.getCategories();
  }
  ngOnDestroy() {
  }
  get f() {
    return this.storeForm.controls;
  }
  getCategories() {
    this.tostr.info("Fetching Categories", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getCategories().subscribe(res => {

      this.categories = res.data.data;
    })
  }

  addStore() {
    this.dataService.addStore(this.storeForm.value).subscribe(res => {

      if (res.success != "1") {
        this.tostr.warning(res.message);
      }
      else {
        this.tostr.success(res.message);
        this.storeForm.reset();

      }

    });
  }
}
