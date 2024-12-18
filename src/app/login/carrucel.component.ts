import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { FormsModule } from '@angular/forms';  
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    InputTextModule, 
    PasswordModule, 
    MessageModule,
    FormsModule,
    CardModule
  ],
  providers: [MessageService] ,
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss'],
})
export class login {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  login() {
    if (this.username === 'admin' && this.password === '12345') {
      this.errorMessage = null;
      
      this.router.navigate(['/juegos']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }
}
