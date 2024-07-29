import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-legend-item',
  standalone: true,
  imports: [],
  templateUrl: './map-legend-item.component.html',
  styleUrl: './map-legend-item.component.css'
})
export class MapLegendItemComponent {

  constructor(private mapService: MapService) { }

  onSwitchStyle(styleUrl: string): void {
    this.mapService.switchStyle(styleUrl);
  }
}
