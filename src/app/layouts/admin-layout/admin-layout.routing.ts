import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { UsersComponent } from '../../components/users/users.component';
import { RolesComponent } from '../../components/roles/roles.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { StoreAddComponent } from 'src/app/components/store-add/store-add.component';
import { StoresComponent } from 'src/app/components/stores/stores.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ActivitiesComponent } from 'src/app/components/activities/activities.component';
import { ActivityAddComponent } from 'src/app/components/activity-add/activity-add.component';
import { ActivityEditComponent } from 'src/app/components/activity-edit/activity-edit.component';
import { StoreEditComponent } from 'src/app/components/store-edit/store-edit.component';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';
import { SiteSettingComponent } from 'src/app/components/site-setting/site-setting.component';
import { CreateSchemesComponent } from 'src/app/components/create-schemes/create-schemes.component';
import { ListSchemesComponent } from 'src/app/components/list-schemes/list-schemes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-user', component: UserProfileComponent },
    { path: 'list-users', component: UsersComponent },
    { path: 'list-roles', component: RolesComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'add-store', component: StoreAddComponent },
    { path: 'list-stores', component: StoresComponent },
    { path: 'edit-store', component: StoreEditComponent },

    { path: 'add-product', component: ProductAddComponent },
    { path: 'list-products', component: ProductsComponent },
    { path: 'edit-product', component: ProductEditComponent },

    { path: 'add-activity', component: ActivityAddComponent },
    { path: 'list-activities', component: ActivitiesComponent },
    { path: 'edit-activity', component: ActivityEditComponent },

    { path: 'site-setting', component: SiteSettingComponent },
    { path: 'create-schemes', component: CreateSchemesComponent },
    { path: 'list-schemes', component: ListSchemesComponent }

];
