<template>
  <div id="simple-map" class="map"></div>
</template>

<script>
import 'openlayers/css/ol.css'
import Map from 'ol/map'
import OSM from 'ol/source/osm'
import TileLayer from 'ol/layer/tile'
import View from 'ol/view'
import proj from 'ol/proj'

export default {
  name: 'Map',
  props: ['config'],
  data () {
    return {
      map: null,
      errorMessage: ''
    }
  },
  mounted() {
    const layers = new TileLayer({
      source: new OSM()
    })
    let lat = 29.47
    let long = 59.79
    const view = new View({
      projection: 'EPSG:3857',
      center: proj.transform([lat, long], 'EPSG:4326', 'EPSG:3857'),
      zoom: 8
    })

    this.map = new Map({
      layers: [ layers ],
      target: 'simple-map',
      view: view
    })
  },  
  methods: {

  }
}
</script>

<style>

.map {
  height: 100%;
}

</style>