import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './Components/album/album.component';
import { AlbumesCardComponent } from './Components/albumes-card/albumes-card.component';
import { AlbumesTableComponent } from './Components/albumes-table/albumes-table.component';

const routes: Routes = [
  { path: '', component: AlbumesTableComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'cardsAlbum', component: AlbumesCardComponent },
  { path: 'albunTable', component: AlbumesTableComponent },
  { path: '**', component: AlbumesTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
