import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingInterceptor } from './Services/loading.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlbumComponent } from './Components/album/album.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AlbumesCardComponent } from './Components/albumes-card/albumes-card.component';
import { CardsComponent } from './Components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './Components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumesTableComponent } from './Components/albumes-table/albumes-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumesCardComponent,
    CardsComponent,
    HeaderComponent,
    AlbumesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
