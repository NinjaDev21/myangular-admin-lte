import { Component, OnInit } from '@angular/core';
// import { LayoutModule, LayoutService } from 'angular-admin-lte';    // Loading layout module
// import { BoxModule } from 'angular-admin-lte';       // Box component
// import { LayoutService } from '../../../src';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // public isCustomLayout: boolean;

  constructor(     // private layoutService: LayoutService
  ) { }

  ngOnInit() {
    // this.layoutService.isCustomLayout.subscribe((value: boolean) => {
    //   this.isCustomLayout = value;
    // });
  }

}
