import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../data/Serie';
import { series } from '../data/dataSerie';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css']
})
export class SeriesListComponent {
  series: Serie[] = series;
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  constructor() {
    this.getAverageSeasons();
  }

  getAverageSeasons(): void {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
