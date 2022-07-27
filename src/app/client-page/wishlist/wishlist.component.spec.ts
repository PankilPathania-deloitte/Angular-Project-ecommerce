import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;
  let service:ApiService
  let wishlistService:WishlistService
  let cartService:CartService
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ],
      providers: [
        ApiService,
        WishlistService,
        CartService,
        

      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes),MaterialModule,BrowserAnimationsModule]
    })
    .compileComponents();
    service = TestBed.inject(ApiService);
    wishlistService=TestBed.inject(WishlistService);
    cartService=TestBed.inject(CartService);
    

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get wishlist ',()=>{
    component.getWishlist()
    expect(component.wishlist).toBeTruthy
  })

  it(' remove wishlist',()=>{
    const input={
      "id": "1",
      "product_name": "Surf Excel",
      "product_weight": "1Kg",
      "product_price": "590",
      "owner": "pankil@gmail.com",
      "count": 2
    }
    expect(component.removeProductFromWishlist(input)).toBeTrue
    
  })

  it('opendialog ',()=>{
    const input={
      "id": "1",
      "product_name": "Surf Excel",
      "product_weight": "1Kg",
      "product_price": "590",
      "owner": "pankil@gmail.com",
      "count": 2
    }
    component.openBuyDialog(input)
    
  })

  it('show snackbar',()=>{
    component.showSnackBarProductBought("test","test")
    
  })

});
