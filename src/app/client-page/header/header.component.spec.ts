import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ApiService } from 'src/app/services/api.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service:ApiService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      providers: [
        ApiService,

      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
    });
    service = TestBed.inject(ApiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking variable',()=>{
    
    expect(component.arrow).toBeFalse
    expect(component.val).toEqual('keyboard_arrow_down')  

  })

  it('change icon ',()=>{
    const x=component.val
    component.changeIcon()
    expect(component.val).toEqual('keyboard_arrow_down')
  })

  it('get all data',()=>{
    const x=component.user
    component.getData()
  })
  it('logout ',()=>{
    
    component.logout()
    
  })
});
