<template>

<div class="layer-item" @click.stop="toggle">
  <template v-if="model && isFolder">
    <div class="layer-group">
      {{ model.name }} 
      <!-- <md-checkbox class="layer-item-checkbox" v-model="checked" v-if="model.itemType === 'spatialCard'">{{ model.name }}</md-checkbox> -->
    </div>  
  </template>
  <template v-else>
    <div class="layer-child">
      <md-checkbox class="layer-item-checkbox" v-if="model.itemType === 'layer'" v-model="layerChecked" @change="showObjects(model)">{{ model.name }}</md-checkbox>
    </div>
  </template>
  <ul v-show="open" v-if="isFolder">
    <layer-item class="item" v-for="currentModel in model.nodes" :key="currentModel.id" :model="currentModel" ref="subitem"></layer-item>
  </ul>
</div>

</template>

<script>

export default {
  name: 'layer-item',
  props: ['model', 'layerChecked'],
  data: function () {
    return {
      open: true,
    }
  },

  computed: {
    isFolder () {
      return this.model && this.model.nodes && this.model.nodes.length > 0
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      } else {
        this.checked = !this.checked
      }
    }
  }

}
</script>

<style scoped>
.layer-item {
  cursor: pointer;
  user-select: none;
  margin: 4px;
  min-height: 20px;
}
.layer-child {
  margin: 0 0 0 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 28px;
}

.layer-child .md-checkbox {
  margin: 0 16px 0 0 !important;
}

.md-checkbox.md-theme-default.md-checked .md-checkbox-container {
  background-color: #e91e63 !important;
  border-color: #e91e63 !important;
}

</style>

