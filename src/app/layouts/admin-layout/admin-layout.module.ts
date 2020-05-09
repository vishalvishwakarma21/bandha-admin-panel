import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from '../../components/users/users.component';
import { RolesComponent } from '../../components/roles/roles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreEditComponent } from 'src/app/components/store-edit/store-edit.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';
import { ActivitiesComponent } from 'src/app/components/activities/activities.component';
import { ActivityEditComponent } from 'src/app/components/activity-edit/activity-edit.component';
import { SiteSettingComponent } from 'src/app/components/site-setting/site-setting.component';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ActivityAddComponent } from 'src/app/components/activity-add/activity-add.component';
import { StoreAddComponent } from 'src/app/components/store-add/store-add.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    StoreAddComponent,
    StoreEditComponent,
    ProductsComponent,
    ProductEditComponent,
    ActivitiesComponent,
    ActivityEditComponent,
    SiteSettingComponent,
    ProductAddComponent,
    ActivityAddComponent
  ]
})

export class AdminLayoutModule { }
