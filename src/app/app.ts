import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SeriesListComponent } from './series-list/series-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeriesListComponent],
  template: `<app-series-list></app-series-list>`
})
export class AppComponent {}

bootstrapApplication(AppComponent);
