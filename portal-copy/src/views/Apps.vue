<template>
  <div>
    <div class="md-layout">
      <md-card-media v-for="app in filteredList" :key="app.id" class="md-card" @click.native="movedOnLayersPage(app)">
        <img :src="require(`./../assets/apps/${app.id}.png`)">
        <md-card-header>
          <div class="md-title">{{ app.name }}</div> 
        </md-card-header>
        <md-card-content> {{ app.description }} </md-card-content>
      </md-card-media>
    </div>
  </div>
</template>

<script>
import { EventBus, Messages } from '@/functions/eventBus.js'
import { apps } from '@/localdata/apps'

export default {
  name: 'Apps',
  data() {
    return {
      apps,
      search: ''
    }
  },
  computed: {
    filteredList() {
      return this.apps.filter(app => {
        return app.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    searchApp(search) {
      this.search = search
    },
    clear() {
      this.search = ''
    },
    movedOnLayersPage(app) {
      const id = app.id
      this.$router.push(`/app/${id}/layers`)
    }
  },
  created() {
    EventBus.$on(Messages.upSearchText, this.searchApp)
    EventBus.$on(Messages.clearSearchApp, this.clear)
  },
  beforeDestroy () {
    EventBus.$off(Messages.upSearchText)
    EventBus.$off(Messages.clearSearchApp)
  }
}



</script>
  
<style>

* {
  margin: 0;
  padding: 0;
}

.md-card {
  max-width: 320px;
  margin: 8px;
  cursor: pointer;
}

.md-card:hover {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  transition-property: box-shadow !important;
}

.md-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}





</style>
  