import { Component, OnInit } from '@angular/core';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = new maplibregl.Map({
      container: 'map', 
      style: 'https://demotiles.maplibre.org/style.json', 
      center: [-74.5, 40],
      zoom: 9
    });
  }
}