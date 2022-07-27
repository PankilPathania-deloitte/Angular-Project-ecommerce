import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';

import { AuthGuard } from './auth.guard';
import { ApiService } from './services/api.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: ApiService;
  let httpController: HttpTestingController
  let http: HttpClient
  let route: Router
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,

      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
    });
    guard = TestBed.inject(AuthGuard);
    service=TestBed.inject(ApiService);
    route=TestBed.inject(Router)
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', ()=>{
    it('should return true for a logged in user', () => {

      const x=service.gettoken()
      expect(x).toBeTrue
      
      // service = { isLoggedIn: () => true };
      // guard = new AuthGuard(authService, router);
      // expect(guard.canActivate()).toEqual(true);
    });
  })
});
