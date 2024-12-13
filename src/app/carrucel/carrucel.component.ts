import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-carousel-demo',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss'],
  standalone: true,
  imports: [CarouselModule,ButtonModule],
})
export class CARRUCELComponent implements OnInit {
  products: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.products = [
      {
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 29.99,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/051/265/833/small_2x/a-red-neon-circle-in-the-sky-above-clouds-photo.jpg',
      },
      {
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1663970206579-c157cba7edda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwcGFyYSUyMHBjfGVufDB8fDB8fHww',
      },
      {
        name: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 39.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYXJ3FpAuosNepDm5-7-2ZO39YlvovZn7Ag&s',
      },
      {
        name: 'Producto 4',
        description: 'Descripción del producto 4',
        price: 19.99,
        image: 'https://wallpapers.com/images/featured/fondo-mhdoyguhq3skloxt.jpg',
      },
      {
        name: 'Producto 5',
        description: 'Descripción del producto 5',
        price: 24.99,
        image: 'https://i.blogs.es/b18815/fondos-pantalla/650_1200.jpg',
      },
    ];
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
