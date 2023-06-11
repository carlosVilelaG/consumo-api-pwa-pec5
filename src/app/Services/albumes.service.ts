import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumesService {
  constructor(private http: HttpClient) {}
  /** retorna el listado de temas de albunes*/
  getAllAlbumes(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
  /** retorna el detalle del tema de albunes*/
  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(
      'https://jsonplaceholder.typicode.com/photos/' + id
    );
  }
}
