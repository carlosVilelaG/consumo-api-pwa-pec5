import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  listaAlbum(): void {
    console.log('1.- paso por navigate ir a lista album');
    this.router.navigateByUrl('');
  }

  cardsAlbum(): void {
    console.log('2.- paso por navigate ir a cards album');
    this.router.navigateByUrl('cardsAlbum');
  }
}
