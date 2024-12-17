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
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>

<div id="map"></div>
