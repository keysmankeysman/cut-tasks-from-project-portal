<template>
  <md-card class="widget-card widget-card-my" :style="{'background-image':`url(${img})`}">
    <h2
      class="main-page-widget-title"
      v-if="title && isTitleDisplayed"
      ref="title"
    >
      {{ title }}
    </h2>
    <div
      class="main-page-widget-body"
    >
      <component
        v-if="type"
        :is="widgetComponent"
        :img="img"
      />
    </div>
  </md-card>
</template>

<script>
import { widgetTypes } from '@/localdata/enumsTypesWidgets'
import LoginWidget from '@/components/Widgets/LoginWidget.vue'
import BannerWidget from '@/components/Widgets/BannerWidget.vue'
import TextWidget from '@/components/Widgets/TextWidget.vue'

export default {
  name: 'widget',
  components: {
    LoginWidget,
    BannerWidget,
    TextWidget
  },
  props: [ 'title', 'type', 'img' ],
  data() {
    return {
      widgetTypes,
    }
  },
  methods:{

  },
  computed: {
    isTitleDisplayed() {
      if (this.type === 'banner') {
        return false
      }
      return true
    },
    widgetComponent () {
      if (!this.type) {
        return null
      }
      const typeObject = this.widgetTypes.find(el => el.value === this.type)
      return typeObject ? typeObject.componentName : null
    }
  }
}
</script>

<style scoped>

.widget-card {
  height: 100%;
}

.widget-card-my {
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 10px;
}

.main-page-widget-title {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  text-align: center;
  font-size: 17px;
}

.main-page-widget-body {
  height: 100%;
}

</style>

