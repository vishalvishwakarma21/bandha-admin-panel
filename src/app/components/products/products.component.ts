import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  stores:any =[];
  constructor(private dataService:DataService,private tostr:ToastrService) { }

  ngOnInit(): void {
    this.getStores();
  }

  getStores(){
    this.tostr.info("Loading...","",{progressBar:true,progressAnimation:'increasing',timeOut:1000});
   this.dataService.getStores().subscribe(res => {

        this.stores = res.data.data;
        
    })
  }

}

