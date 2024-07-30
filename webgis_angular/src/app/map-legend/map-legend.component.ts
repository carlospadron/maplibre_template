import { Component } from '@angular/core';
import { MapLegendItemComponent } from '../map-legend-item/map-legend-item.component';
import { MapLegendBasemapComponent } from '../map-legend-basemap/map-legend-basemap.component';

@Component({
  selector: 'app-map-legend',
  standalone: true,
  imports: [MapLegendItemComponent, MapLegendBasemapComponent],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css'
})
export class MapLegendComponent {
  isExpanded = false;

  toggleLegend() {
    this.isExpanded = !this.isExpanded;
  }
}