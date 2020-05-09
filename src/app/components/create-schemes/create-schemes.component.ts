import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-schemes',
  templateUrl: './create-schemes.component.html',
  styleUrls: ['./create-schemes.component.css']
})
export class CreateSchemesComponent implements OnInit {
  schemeForm: FormGroup;

  constructor(public fb: FormBuilder,
    public dataService: DataService, private tostr: ToastrService) { }

  ngOnInit(): void {

    this.schemeForm = this.fb.group({
      'name': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'default_points': new FormControl('', [Validators.required]),
      'bonus_points': new FormControl('', [Validators.required]),
      'bonus_start_date': new FormControl(''),
      'bonus_end_date': new FormControl('', [Validators.required]),
      'scheme_end_date': new FormControl('', [Validators.required]),
      'prod_id': new FormControl('', [Validators.required]),
      'prod_volume': new FormControl('', [Validators.required]),
      'activity_id': new FormControl('', [Validators.required]),
    })


  }
  createScheme() {
    let formValue = this.schemeForm.value;
    formValue.bonus_start_date = new Date(formValue.bonus_start_date).getTime() / 1000;
    formValue.bonus_end_date = new Date(formValue.bonus_end_date).getTime() / 1000;
    formValue.scheme_end_date = new Date(formValue.scheme_end_date).getTime() / 100;
    console.log("this is theday -=-=-=-=", this.schemeForm.value)
    this.dataService.schemeCreate(this.schemeForm.value).subscribe(res => {
      console.log("this is response of schemes -=-=-=-=")
      if (res.success != "1") {
        console.log("this is response of schemes -=-=-=-=")
        this.tostr.warning(res.message);
      }
      else {
        this.tostr.success(res.message);
        // this.schemeForm.reset();

      }

    });

  }

}
