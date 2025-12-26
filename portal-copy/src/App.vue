<template>
  <div id="app">
    <Header v-if="isAllowRoute"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  data() {
    return {
      // isAllowRoute: false
    }
  },
  components: {
    Header
  },
  computed: {
    isAllowRoute() {
      let url = this.$route.path
      let arr = url.split('/')
      if (arr.find(el => el === 'app')) {
        return false
      }
      else if (arr.find(el => el === 'internal')) {
        return false
      } else {
        return true
      }
    }
  }
}



</script>


<style>

#app {
  height: 100%;
  width: 100%;
}

.color-blue {
  background: #3f51b5 !important;
}

</style>
