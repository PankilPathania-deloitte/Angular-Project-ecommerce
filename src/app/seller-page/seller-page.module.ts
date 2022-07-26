import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPageRoutingModule } from './seller-page-routing.module';
import { SellerPageComponent } from './seller-page.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [
    SellerPageComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    SellerPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SellerPageModule { }
