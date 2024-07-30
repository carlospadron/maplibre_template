import { Component, Input } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-legend-basemap',
  standalone: true,
  imports: [],
  templateUrl: './map-legend-basemap.component.html',
  styleUrl: './map-legend-basemap.component.css'
})
export class MapLegendBasemapComponent {
  @Input() styleUrl: string = 'styles/osm.json';
  @Input() styleName: string = 'OSM Style';

  constructor(private mapService: MapService) { }

  onSwitchStyle(styleUrl: string): void {
    this.mapService.switchStyle(styleUrl);
  }
}