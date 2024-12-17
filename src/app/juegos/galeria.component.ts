import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    AccordionModule,
    ChipModule,
    PaginatorModule,
    MenubarModule
  ],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class juegos {
  constructor(private router: Router) {}

  juegos = [
    {
      titulo: 'League of Legends',
      descripcion: 'Un MOBA competitivo con una gran comunidad.',
      imagen: 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends',
      categorias: ['Estrategia', 'Competitivo', 'MOBA'],
      link: 'https://www.leagueoflegends.com/'
    },
    {
      titulo: 'Valorant',
      descripcion: 'Un FPS táctico basado en habilidades únicas.',
      imagen: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f657721a7eb06acae52a29ad3a951f20c1e5fc60-1920x1080.jpg?auto=format&fit=fill&q=80&w=1082',
      categorias: ['Shooter', 'Competitivo'],
      link: 'https://playvalorant.com/'
    },
    {
      titulo: 'Teamfight Tactics',
      descripcion: 'Un auto-battler estratégico con campeones de LoL.',
      imagen: 'https://i.blogs.es/b1b2bf/tft-para-moviles/450_1000.jpg',
      categorias: ['Estrategia', 'Auto-battler'],
      link: 'https://teamfighttactics.leagueoflegends.com/'
    },

    {
      titulo: 'Ruined King: A League of Legends Story',
      descripcion: 'un RPG desarrollado por Airship Syndicate y publicado por Riot Forge ',
      imagen: 'https://cdn1.epicgames.com/offer/a69c5a82682c43148e4e2542fe2fcd0f/Offer_Library%20Image%20-%20Landscape_2560x1440-979fdc8527174ef034525efc67da271c',
      categorias: ['Estrategia', 'Competitivo'],
      link: 'https://teamfighttactics.leagueoflegends.com/'
    },
  ];

  
  menubarItems = [
    { label: 'Inicio', icon: 'pi pi-home', command: () => this.router.navigate(['/formulario']) },
    { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.router.navigate(['/home']) }
  ];


  
  first: number = 0;
  rows: number = 2;

  // Métodos para paginación
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
