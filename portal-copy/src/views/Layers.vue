<template>
  <div class="layers">
    <pane title="Картографические материалы" @close="$emit('close')">
      <layer-item 
        class="tree item" 
        v-for="treeRoot in treeRoots" 
        :key="treeRoot.id" 
        :model="treeRoot" 
        :layerChecked="true"
        ref="layeritem"
      ></layer-item>
    </pane>
  </div>
</template>

<script>
import LayerItem from '@/components/LayerItem'
import Pane from './Pane.vue'
import { treeRoots } from '@/localdata/treeRoots'

export default {
  name: 'Layers',
  components: { LayerItem, Pane },
  props: [ 'layers' ],
  data() {
    return {
      treeRoots
    }
  },
  methods: {

  },
}

</script>

<style scoped>

.layers {
  left: 80px;
  top: 7px;
  bottom: 95px;
  right: auto;
  width: 400px;
  background: #fff;
  position: absolute;
  z-index: 1;
}

</style>
  

  