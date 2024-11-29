import {Component, } from '@angular/core';
import { HttpClientModule,} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, FormsModule,ButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class Cuatro {
  constructor(private router: Router) {}


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}


