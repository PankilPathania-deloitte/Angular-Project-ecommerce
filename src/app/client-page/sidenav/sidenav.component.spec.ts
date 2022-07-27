import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let router:Router
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking variable',()=>{
    
    expect(component.isValue).toEqual(1)
    expect(component.toggle).toBeTrue
    expect(component.sidenavWidth).toBeTrue    
  })

  it('checking increase sidenav width',()=>{
    let x =component.sidenavWidth
    component.increase()
    expect(component.sidenavWidth).toEqual(15)
  })

  it('checking decrease sidenav width',()=>{
    let x =component.sidenavWidth
    component.decrease()
    expect(component.sidenavWidth).toEqual(5)
    
  })

  it('check routing ',()=>{
    
    component.onClick('dashbooard',1)
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/client-page/dashboard']);
  })

});
