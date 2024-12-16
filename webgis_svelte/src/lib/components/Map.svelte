<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
  
    let map;
  
    onMount(() => {
      map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 2 // starting zoom
      });
    });
</script>

<style>
#map {
    width: 100%;
    height: 100vh;
}
</style>

<div id="map"></div>
