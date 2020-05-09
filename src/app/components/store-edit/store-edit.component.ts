import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {

  updatestoreForm: FormGroup;

  categories: any = [];
  constructor(public fb: FormBuilder,public dataService: DataService,private tostr:ToastrService) {

    this.updatestoreForm = this.fb.group({
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
  get f(){
    return this.updatestoreForm.controls;
  }
  getCategories() {
    this.tostr.info("Fetching Categories","",{progressBar:true,progressAnimation:'increasing',timeOut:1000});
    this.dataService.getCategories().subscribe(res => {

      this.categories = res.data;
    })
  }

  addStore() {
    this.dataService.addStore(this.updatestoreForm.value).subscribe(res=>{

      if(res.success!="1"){
        this.tostr.warning(res.message);
      }
      else{
        this.tostr.success(res.message);
        this.updatestoreForm.reset();
     
      }

    });
  }
}
