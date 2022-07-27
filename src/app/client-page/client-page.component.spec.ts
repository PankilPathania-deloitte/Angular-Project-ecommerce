import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageComponent } from './client-page.component';

describe('ClientPageComponent', () => {
  let component: ClientPageComponent;
  let fixture: ComponentFixture<ClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking variable',()=>{
    expect(component.openSideNav).toBeTrue
  })

  it('toggle function',()=>{
    component.toggleSidenav()
    expect(component.openSideNav).toBeTrue
  })
});
