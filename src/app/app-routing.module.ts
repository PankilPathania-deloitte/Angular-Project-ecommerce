import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SignupComponent } from './components/signup/signup.component';
import { Role } from './models/roles.model';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},

  {
    path: 'client-page',
    loadChildren: () => import('./client-page/client-page.module').then(m => m.ClientPageModule),canActivate:[AuthGuard],
    data: { roles: [Role.client] }
  },
  {
    path: 'seller-page',
    loadChildren: () => import('./seller-page/seller-page.module').then(m => m.SellerPageModule),canActivate:[AuthGuard],
    data: { roles: [Role.seller] }
  },
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
