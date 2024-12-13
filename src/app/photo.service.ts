import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // Lista de imágenes para la galería
  private images = [
    {
      itemImageSrc: 'https://content.wepik.com/statics/327039039/preview-page0.jpg',
      thumbnailImageSrc: 'https://content.wepik.com/statics/327039039/preview-page0.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://i.pinimg.com/originals/dc/de/eb/dcdeeb0b0074bbe4d53f2f8bdc8f7631.jpg',
      thumbnailImageSrc: 'https://i.pinimg.com/originals/dc/de/eb/dcdeeb0b0074bbe4d53f2f8bdc8f7631.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      itemImageSrc: 'https://i.pinimg.com/736x/44/7a/dc/447adce214d585514a9aaa32cb17cf94.jpg',
      thumbnailImageSrc: 'https://i.pinimg.com/736x/44/7a/dc/447adce214d585514a9aaa32cb17cf94.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://play-lh.googleusercontent.com/vu7OqmzkBpDFHJJSZQrVjWfEoVPAfdf2NppWN-49x5hpmvQEqWcBQV4hVnzxy9_4=w526-h296-rw',
      thumbnailImageSrc: 'https://play-lh.googleusercontent.com/vu7OqmzkBpDFHJJSZQrVjWfEoVPAfdf2NppWN-49x5hpmvQEqWcBQV4hVnzxy9_4=w526-h296-rw',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://cdn.andro4all.com/andro4all/2022/04/Fondo-de-pantalla-de-color-negro-3D.jpg?height=600',
      thumbnailImageSrc: 'https://cdn.andro4all.com/andro4all/2022/04/Fondo-de-pantalla-de-color-negro-3D.jpg?height=600',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://iphoneros.com/wp-content/uploads/2022/06/539f8b5502bc162f5c6cecdbc03f58bd-Grande.jpeg',
      thumbnailImageSrc: 'https://iphoneros.com/wp-content/uploads/2022/06/539f8b5502bc162f5c6cecdbc03f58bd-Grande.jpeg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'https://img.lovepik.com/background/20211029/medium/lovepik-abstract-color-handset-wallpaper-background-image_400251300.jpg',
      thumbnailImageSrc: 'https://img.lovepik.com/background/20211029/medium/lovepik-abstract-color-handset-wallpaper-background-image_400251300.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    }
    // Puedes agregar más imágenes aquí
  ];

  constructor() {}

  // Devuelve las imágenes como una promesa
  getImages() {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve(this.images);
      }, 1000); // Simula un retardo de 1 segundo
    });
  }
}
