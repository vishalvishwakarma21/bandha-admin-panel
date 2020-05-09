import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  isHeader: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '', isHeader: false },


  { path: '', title: 'User Management', icon: 'ni-circle-08 text-orange', class: '', isHeader: true },
  { path: '/add-user', title: 'Create User', icon: 'ni-single-02 text-yellow', class: '', isHeader: false },
  { path: '/list-users', title: 'List Users', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
  { path: '/list-roles', title: 'List User Roles', icon: 'ni-key-25 text-info', class: '', isHeader: false },

  { path: '', title: 'Store Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
  { path: '/add-store', title: 'Create Store', icon: 'ni ni-shop', class: '', isHeader: false },
  { path: '/list-stores', title: 'List of Stores', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },

  { path: '', title: 'Product Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
  { path: '/add-product', title: 'Add Product', icon: 'ni ni-shop', class: '', isHeader: false },
  { path: '/list-products', title: 'list of all products', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },

  { path: '', title: ' Schemes Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
  { path: '/create-schemes', title: 'Create Schemes', icon: 'ni ni-shop', class: '', isHeader: false },
  { path: '/list-schemes', title: 'List Schemes', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },

  { path: '', title: 'Activity Management', icon: 'ni ni-world-2 text-orange', class: '', isHeader: true },
  // { path: '/add-activity', title: 'Add Activity', icon: 'ni ni-shop', class: '', isHeader: false },
  { path: '/list-activities', title: 'list of all Activities', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },

  { path: '/site-setting', title: 'Site Setting', icon: 'ni ni-settings-gear-65 text-orange', class: '', isHeader: false },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, public authService: AuthService) { }



  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }


  logout() {
    this.authService.doLogout()
  }
}
