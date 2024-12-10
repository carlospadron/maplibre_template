<script>
  import { onMount } from 'svelte';
  import maplibregl from 'maplibre-gl';

  let mapContainer;

  onMount(() => {
    const map = new maplibregl.Map({
      container: mapContainer,
      style: 'https://demotiles.maplibre.org/style.json', // Specify the style URL
      center: [0, 0], // Initial map center in [lon, lat]
      zoom: 2 // Initial map zoom level
    });
  });
</script>

<div bind:this={mapContainer} class="map-container"></div>

<style>
  .map-container {
    width: 100%;
    height: 100vh; /* Full viewport height */
  }
</style>