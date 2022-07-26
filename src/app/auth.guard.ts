import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: ApiService, private router: Router) {
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.gettoken()) {
      let userRole=this.auth.getRole()
      if(route.data['roles'] && route.data['roles'].indexOf(userRole) === -1){
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    return false;
  }

}
