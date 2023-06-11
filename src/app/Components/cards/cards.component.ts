import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() item: Album = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  @Input() showButtons: boolean = true;

  @Output() detalleAlbum: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  toogleDetalleAlbum(id: number): void {
    this.router.navigateByUrl('album/' + id.toString());
  }
}
