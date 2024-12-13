import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';  
import { GalleriaModule } from 'primeng/galleria';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  standalone: true,
  imports: [GalleriaModule,ButtonModule],  
  providers: [PhotoService]
})
export class GALERIAComponent implements OnInit {
  images: any[] = []; 
  responsiveOptions: any[] = [];

  constructor(private photoService: PhotoService,private router: Router) {}

  ngOnInit() {

    this.photoService.getImages().then((images) => (this.images = images));

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  onValueChange(event: any) {
    console.log(event);
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}