import { Component } from '@angular/core';

@Component({
  selector: 'app-map-legend',
  standalone: true,
  imports: [],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css'
})
export class MapLegendComponent {
  isExpanded = false;

  toggleLegend() {
    this.isExpanded = !this.isExpanded;
  }
}