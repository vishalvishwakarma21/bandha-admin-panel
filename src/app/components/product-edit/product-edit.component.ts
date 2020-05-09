import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  updateproductForm :FormGroup;

  constructor(public fb: FormBuilder,public dataService: DataService,private tostr:ToastrService) {
    this.updateproductForm = this.fb.group({
      product_name: new FormControl('', [Validators.required]),
      product_image: new FormControl('', [Validators.required]),
      Product_purchse_price: new FormControl('', [Validators.required]),
      product_sale_price: new FormControl('', [Validators.required]),
      product_details: new FormControl('', [Validators.required]),
      product_code: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])

    });

   }

  ngOnInit(): void {
  }

  get f(){
    return this.updateproductForm.controls;
  }

  

  updateProduct(){
    // console.log(this.updateproductForm.controls);
  }

}
