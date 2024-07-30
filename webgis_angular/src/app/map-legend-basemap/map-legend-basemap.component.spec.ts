import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLegendBasemapComponent } from './map-legend-basemap.component';

describe('MapLegendBasemapComponent', () => {
  let component: MapLegendBasemapComponent;
  let fixture: ComponentFixture<MapLegendBasemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapLegendBasemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLegendBasemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
