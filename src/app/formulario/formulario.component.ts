import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpinnerModule } from 'primeng/spinner';
import { SliderModule } from 'primeng/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    FileUploadModule,
    InputTextareaModule,
    SpinnerModule,
    SliderModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FORMULARIOComponent implements OnInit {
  formulario: FormGroup;



  constructor(private router: Router) {
    // Inicialización del formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      ciudad: new FormControl(null, Validators.required),
      telefono: new FormControl('', Validators.required),
      tipo: new FormControl(null, Validators.required),
      aceptar: new FormControl(false, Validators.requiredTrue),
      fechaNacimiento: new FormControl(null, Validators.required),
      comentarios: new FormControl('', Validators.required),
      documento: new FormControl(null, Validators.required),
      cantidad: new FormControl(1, Validators.required),
      valor: new FormControl(50, Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
