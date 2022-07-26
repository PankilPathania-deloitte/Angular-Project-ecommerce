import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ClientPageComponent } from './client-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: '',
    component: ClientPageComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'invoice',
        component:InvoiceComponent
      }
    ]
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
