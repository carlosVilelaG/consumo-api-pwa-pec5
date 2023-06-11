import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album.interface';
import { AlbumesService } from 'src/app/Services/albumes.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album!: Album;
  panelOpenState = false;

  constructor(
    private albumesService: AlbumesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ' + identifier);
    let idRegistro: number = 0;
    if (identifier) {
      idRegistro = parseInt(identifier);
      console.log('llego parametro id ::: ' + identifier);
      console.log('llego parametro id number ::: ' + idRegistro);
      this.albumesService.getAlbumById(idRegistro).subscribe((album) => {
        if (!album) {
          return this.router.navigateByUrl('/');
        }
        this.album = album;
        console.log('album --> ' + this.album);
      });
    }
  }
}
