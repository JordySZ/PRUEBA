import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMULARIOComponent } from './formulario.component';

describe('FORMULARIOComponent', () => {
  let component: FORMULARIOComponent;
  let fixture: ComponentFixture<FORMULARIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FORMULARIOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FORMULARIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
