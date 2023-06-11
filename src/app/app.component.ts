import { Component } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'consumo-api-pwa';
  loading: boolean;
  constructor(private sharedService: SharedService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.sharedService
      .getLoading()
      .subscribe((loading) => (this.loading = loading));
  }
}
