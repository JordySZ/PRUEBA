import { ComponentFixture, TestBed } from '@angular/core/testing';

import { juegos } from './galeria.component';

describe('GALERIAComponent', () => {
  let component: juegos;
  let fixture: ComponentFixture<juegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [juegos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(juegos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
