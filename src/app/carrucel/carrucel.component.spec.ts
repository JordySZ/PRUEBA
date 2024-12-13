import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARRUCELComponent } from './carrucel.component';

describe('CARRUCELComponent', () => {
  let component: CARRUCELComponent;
  let fixture: ComponentFixture<CARRUCELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CARRUCELComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CARRUCELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
