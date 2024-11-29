import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deber3',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './deber4.component.html',
  styleUrl: './deber4.component.scss'
})
export class Deber3Component {
  constructor(private router: Router) {}


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

