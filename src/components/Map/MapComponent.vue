<template>
    <div id="map" class="map"></div>
  </template>
  
  <script>
  import 'ol/ol.css';
  import { Map, View } from 'ol';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import { fromLonLat } from 'ol/proj'; 
  
  export default {
    name: 'MapComponent',
    mounted() {
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([79.0193, 30.0668]), 
          zoom: 9, 
        }),
      });
    },
  };
  </script>
  
  <style scoped>

  .map {
    width: 200vh;
    height: 100vh;
    overflow: hidden;  
  }
  </style>
  