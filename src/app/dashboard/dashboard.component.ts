import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // items: MenuItem[];

  constructor() { }

  ngOnInit() {
    // this.items = [
    //   {label: 'Register', routerLink: '/dashboard/register'},
    //   {label: 'List', routerLink: '/dashboard/list'}
    // ];
  }
}
