import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm :FormGroup;

  constructor(public fb: FormBuilder,public dataService: DataService,private tostr:ToastrService) {
    this.productForm = this.fb.group({
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
    return this.productForm.controls;
  }

  

  addProduct(){
    // console.log(this.productForm.controls);
  }

}
