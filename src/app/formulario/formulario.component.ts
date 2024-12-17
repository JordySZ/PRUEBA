import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

// PrimeNG

import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    ToolbarModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FORMULARIOComponent {
   // Elementos del carrusel
   images: string[] = [
    'https://www.riotgames.com/darkroom/1920/10f6ae1e3fc457fa3ce9f564b173f9dc:f5ad12c686df810e35c522d3402b6f59/homepage-hero-general-brand.png',
    'https://www.riotgames.com/darkroom/800/1bf5f8d967e49f1e855bcdc76abf9d76:f09143b7d7f2121c0b9f0283ac8d6837/e9a3-riot-games-homepage-product-card-hex161616.png',
    'https://cdn.playersupport.riotgames.com/support-site/images/general/masthead/background.webp',
  ];

  features = [
    {
      icon: 'pi pi-shield',
      title: 'Al servicio de los más fieles',
      description: 'Nos centramos en crear la mejor experiencia posible para los jugadores, independientemente del equipo en el que estemos o los sacrificios que sean necesarios. Las líneas empresariales no nos limitan a la hora de crear una experiencia cohesiva de principio a fin.',
    },
    {
      icon: 'pi pi-mobile',
      title: 'Los egos no tienen cabida',
      description: 'Hacer lo correcto es más importante que tener razón. Hablamos, debatimos de forma apasionada y ponemos a prueba las ideas siempre pensando en qué es lo mejor para los jugadores. A la hora de trabajar, nos volcamos en cuerpo y alma.',
    },
    {
      icon: 'pi pi-cog',
      title: 'Apostamos por equipos diversos y con un gran rendimiento',
      description: 'Queremos tener a los mejores trabajadores en nuestros equipos para crear experiencias auténticas y que dejen huella en nuestros jugadores. Creamos nuestros equipos con esto en mente.',
    },
  ];
  constructor(private router: Router) {}


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

