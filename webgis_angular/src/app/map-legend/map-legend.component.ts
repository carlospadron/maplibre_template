import { Component } from '@angular/core';
import { MapLegendItemComponent } from '../map-legend-item/map-legend-item.component';

@Component({
  selector: 'app-map-legend',
  standalone: true,
  imports: [MapLegendItemComponent],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css'
})
export class MapLegendComponent {
  isExpanded = false;

  toggleLegend() {
    this.isExpanded = !this.isExpanded;
  }
}