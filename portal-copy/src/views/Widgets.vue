<template>
  <div class="widgets">
    <grid-layout
      :layout.sync="widgets"
      :col-num="widgetsSettings.colNum"
      :row-height="widgetsSettings.rowHeight"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >

        <grid-item v-for="widget in widgets"
          :x="widget.x"
          :y="widget.y"
          :w="widget.w"
          :h="widget.h"
          :i="widget.i"
          :key="widget.i">
          <widget 
            :title="widget.settings.title" 
            :type="widget.type" 
            :img="widget.settings.typeSpecificSettings.image"
          ></widget>
        </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'
import { widgets } from '@/localdata/widgets'
import Widget from '@/components/Widget.vue'

export default {
  name: 'Widgets',
  components: {
    GridLayout,
    GridItem,
    Widget,
  },
  data() {
    return {
      title: 'Виджет',
      widgets,
      widgetsSettings: {
        colNum: 8,
        rowHeight: 150,
      },
    }
  },
  methods: {

  },
}



</script>

<style scoped>

.md-card {
  max-width: 100%;
}

</style>
  

  