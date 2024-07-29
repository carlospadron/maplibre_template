import { Injectable } from '@angular/core';
import * as maplibregl from 'maplibre-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: maplibregl.Map = {} as maplibregl.Map;

  setMap(map: maplibregl.Map): void {
    this.map = map;
  }

  switchStyle(styleUrl: string): void {
    if (this.map) {
      this.map.setStyle(styleUrl);
    }
  }
}