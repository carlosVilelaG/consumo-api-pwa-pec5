import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Album } from 'src/app/models/album.interface';
import { AlbumesService } from 'src/app/Services/albumes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albumes-card',
  templateUrl: './albumes-card.component.html',
  styleUrls: ['./albumes-card.component.css'],
  animations: [
    trigger('cardsAnimation', [
      state('waiting', style({ opacity: 1 })),
      state('loaded', style({ opacity: 1 })),
      transition('waiting => loaded', [
        query('.post_card', [
          style({ opacity: 0, transform: 'translateX(-300px)' }),
          stagger(500, [
            animate(
              '1500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AlbumesCardComponent implements OnInit {
  albumes: Album[];
  animationState: string;

  constructor(private albumesService: AlbumesService, private router: Router) {
    this.albumes = new Array<Album>();
    console.log('entro a akbunesCard constructor');
    this.animationState = 'waiting';
  }

  ngOnInit(): void {
    this.albumesService
      .getAllAlbumes()
      .subscribe((albumes) => (this.albumes = albumes));

    console.log('entro a akbunesCard cngOnImit');
  }

  detalleAlbum(id: number): void {
    this.router.navigateByUrl('album/' + id.toString());
  }
}
