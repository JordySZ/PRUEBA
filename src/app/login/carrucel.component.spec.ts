import { ComponentFixture, TestBed } from '@angular/core/testing';

import { login } from './carrucel.component';

describe('CARRUCELComponent', () => {
  let component: login;
  let fixture: ComponentFixture<login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
