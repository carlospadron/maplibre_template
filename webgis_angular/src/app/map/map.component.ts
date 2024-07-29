import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    const map = new maplibregl.Map({
      container: 'map', 
      style: 'styles/osm.json', //default sytle //'https://demotiles.maplibre.org/style.json', 
      center: [-1.2, 52.5],
      zoom: 5
    });
    this.mapService.setMap(map);
  }
}