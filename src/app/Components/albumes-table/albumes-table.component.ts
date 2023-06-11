import { Component, ViewChild, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { AlbumesService } from 'src/app/Services/albumes.service';

@Component({
  selector: 'app-albumes-table',
  templateUrl: './albumes-table.component.html',
  styleUrls: ['./albumes-table.component.css'],
})
export class AlbumesTableComponent implements OnInit {
  albumes: Album[];

  displayedColumns: string[] = [
    'albumId',
    'id',
    'title',
    'thumbnailUrl',
    'action',
  ];

  dataSource!: MatTableDataSource<Album>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private albumesService: AlbumesService, private router: Router) {
    this.albumes = new Array<Album>();
  }

  ngOnInit(): void {
    this.albumesService.getAllAlbumes().subscribe((albumes) => {
      this.albumes = albumes;
      this.dataSource = new MatTableDataSource(this.albumes);
      this.dataSource.sort = this.sort;
    });

    console.log('entro a akbunesCard cngOnImit');
  }

  detalleAlbum(id: number): void {
    this.router.navigateByUrl('album/' + id.toString());
  }
}
