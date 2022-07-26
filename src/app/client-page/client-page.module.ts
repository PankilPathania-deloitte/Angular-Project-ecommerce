import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientPageComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    WishlistComponent,
    CartComponent,
    PaymentComponent,
    ProfileComponent,
    InvoiceComponent,
    FilterPipe
    
  ],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ClientPageModule { }
