import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from 'angular-admin-lte';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MkTabsModule,
    DropdownModule,
    BoxModule
  ],
})
export class UsersModule { }
