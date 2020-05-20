import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../shared/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-schemes',
  templateUrl: './edit-schemes.component.html',
  styleUrls: ['./edit-schemes.component.css']
})
export class EditSchemesComponent implements OnInit {
  schemeForm: FormGroup;
  schemes_id: any;
  schemes: any;

  constructor(public fb: FormBuilder,
    public dataService: DataService, private tostr: ToastrService, public route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.schemes_id = params.id
    })
  }

  ngOnInit(): void {
    this.getSchemes();
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
  getSchemes() {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getSchemes('').subscribe(res => {
      this.schemes = res.data.data.find(x => x.id == this.schemes_id);
      console.log("this is the-=-=", this.schemes)
      let star = this.schemes.bonus_start_date.split(' ')[0];
      let end = this.schemes.bonus_end_date.split(' ')[0];
      let end_sch = this.schemes.scheme_end_date.split(' ')[0];
      console.log(star);
      this.schemeForm.patchValue({
        'name': this.schemes.name,
        'description': this.schemes.description,
        'default_points': this.schemes.default_points,
        'bonus_points': this.schemes.bonus_points,
        'bonus_start_date': star,
        'bonus_end_date': end,
        'scheme_end_date': end_sch,
        'prod_id': this.schemes.product_id,
        'prod_volume': this.schemes.product_volume,
        'activity_id': this.schemes.activity_list_id
      })
    })
  }
  updateScheme() {
    let formValue = this.schemeForm.value;
    formValue.bonus_start_date = new Date(formValue.bonus_start_date).getTime() / 1000;
    formValue.bonus_end_date = new Date(formValue.bonus_end_date).getTime() / 1000;
    formValue.scheme_end_date = new Date(formValue.scheme_end_date).getTime() / 100;
    console.log("this is theday -=-=-=-=", this.schemeForm.value)
    let data = {
      'name': this.schemes.name,
      'description': this.schemes.default_points,
      'default_points': this.schemes.default_points,
      'scheme_end_date': this.schemeForm.value.scheme_end_date,
      'scheme_id': this.schemes_id
    }
    this.dataService.schemeUpdate(data).subscribe(res => {
      console.log("this is response of schemes -=-=-=-=")
      if (res.success != "1") {
        console.log("this is response of schemes -=-=-=-=")
        this.tostr.warning(res.message);
      }
      else {
        this.tostr.success(res.message);
        console.log("this sis the next page =-=-=-")
        this.router.navigate(['/list-schemes'])
        // this.schemeForm.reset();
      }
    });

  }




}
