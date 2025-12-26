<template>
  <div class="thematic">
    <map-component></map-component>

    <sidenav-mini :user="userFromStore" :config="configFromStore" @select="select"></sidenav-mini>

    <KeepAlive>
      <router-view
        :layers="layers"
      ></router-view>
    </KeepAlive>

  </div>
</template>

<script>
import { sections } from '../mixins/sidenavMixin.js'
import SidenavMini from '@/components/SidenavMini'
import MapComponent from '@/components/Map'

export default {
  name: 'ThematicSet',
  components: { SidenavMini, MapComponent },
  data() {
    return {

    }
  },
  methods: {
    select (item) {
      switch (item.type) {
        case sections.Administration:
          this.$router.push({ name: 'managethematicsets' })
          break
        case sections.BaseMaps:
          this.$router.push({ name: 'basemaps' })
          break
        case sections.MyPlaces:
          this.$router.push({ name: 'bookmarks' })
          break
        case sections.Analytics:
          this.$router.push({ name: 'analytics' })
          this.$refs.timelinebutton.activate()
          break
        case sections.Legend:
          this.$router.push({ name: 'legend' })
          break
        case sections.ClearMap:

          break
        case sections.Help:
          this.help()
          break
        case sections.Feedback:
          this.email()
          break
        case sections.Apps:
          this.$router.push({ name: 'apps' })
          break
        case sections.Index:
          this.$router.push({ path: '/'})
          break
        case sections.Logout:
          this.logout()
          break
        case sections.Login:
          this.login()
          break
        case sections.SaveMap:
          this.$refs.saveMap.takeScreenshot()
          break
        case sections.MapLink:
          this.$refs.shareLink.shareMap(this.id, null, this.basemaps)
          break
      }
    },
  },
  computed: {
    userFromStore() {
       return this.$store.state.user
    },
    configFromStore() {
       return this.$store.state.config
    },
    layers() {
       return this.$store.state.layers
    },
  },
}

</script>

<style scoped>

.thematic {
  height: 100vh;
  position: relative;
}

</style>
  

  