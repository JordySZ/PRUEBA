import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-deber2',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './deber2.component.html',
  styleUrl: './deber2.component.scss'
})
export class Deber2Component {
  constructor(private router: Router) {}


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
