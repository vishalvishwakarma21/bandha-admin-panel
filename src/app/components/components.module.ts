import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateSchemesComponent } from './create-schemes/create-schemes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSchemesComponent } from './list-schemes/list-schemes.component';
/* import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component'; */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CreateSchemesComponent,
    ListSchemesComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
