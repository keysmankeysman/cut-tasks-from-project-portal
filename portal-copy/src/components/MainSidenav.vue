<template>
  <md-drawer :md-active.sync="showNavigation" md-swipeable>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
    </md-toolbar>

    <md-list>
      <md-list-item v-for="link in urlsFromStore" :key="link.id" @click="openLink(link.path)">
        <md-icon>{{ link.icon }}</md-icon>
        <span class="md-list-item-text">{{ link.name }}</span>
      </md-list-item>
    </md-list>
    
  </md-drawer>

</template>

<script>

export default {
  data () {
    return {
      showNavigation: false,
    }
  },
  computed: {
    urlsFromStore() {
       return this.$store.state.urls
    },
  },
  methods: {
    toggle () {
      this.showNavigation = true
    },
    openLink(path) {
      if (path !== this.$route.path) {
        this.$router.push(`${path}`)
        this.showNavigation = false
      }
    },
    search() {

    },  
    clear() {

    }
  }
}
</script>

<style scoped>
.md-list-item {
  cursor: pointer;
}
.md-list-item:hover {
  background-color: rgba(153, 153, 153, 0.2);
  text-decoration: none;
}

.md-list-item router-link {
  display: flex
}

.md-drawer {
    width: 280px !important;
    max-width: 325px !important;
    /* max-width: calc(100vw - 125px); */
}

</style>
