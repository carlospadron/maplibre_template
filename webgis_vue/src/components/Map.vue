<script setup lang="ts">
import { onMounted, ref } from 'vue';
import maplibregl from 'maplibre-gl';

const mapContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {
    const map = new maplibregl.Map({
      container: mapContainer.value,
      style: 'https://demotiles.maplibre.org/style.json', // Specify the style URL
      center: [0, 0], // Initial map center in [lon, lat]
      zoom: 2 // Initial map zoom level
    });
  }
});
</script>

<template>
  <div class="map-container" ref="mapContainer"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh; /* Full viewport height */
}
</style>