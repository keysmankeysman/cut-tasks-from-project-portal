<template>
  <div class="sidenav-mini toolbar-background" v-if="items.length">
    <md-list class='toolbar-background'>
      <md-item :title="config.name" v-on:click.native="information">
        
      </md-item>
    </md-list>

    <md-divider></md-divider>

    <div v-for="item of items" :key="item.id">
      <md-list-item @click="select(item)">
        <md-icon :md-iconset="`mdi ${item.icon}`" v-if="item.icon.indexOf('mdi') == 0"></md-icon>
        <md-icon v-else>{{ item.icon }}</md-icon>
      </md-list-item>
      <md-divider></md-divider>
    </div>
  </div>
</template>

<script>
import sidenavMixin from '../mixins/sidenavMixin'

export default {
  name: 'sidenav-mini',
  props: ['config','user'],
  mixins: [sidenavMixin],
  methods:{
    information(){
      this.$router.push({ name: "information" })
    }
  }  
}
</script>

<style scoped>
.sidenav-mini {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 64px;
  color: rgba(255, 255, 255, .87);
  background: #3f51b5;
  height: 100%;
}

.sidenav-mini .md-list-item {
  list-style-type: none;
}

.sidenav-mini .md-list {
  padding: 0;
  justify-content: center;
}
.sidenav-mini .md-list-item .md-icon {
  margin: 0 !important;
  color: rgba(255, 255, 255, .87);
}
.sidenav-mini .md-button {
  min-width: 64px;
}
.sidenav-mini .md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child {
  margin-right: 0;
  margin-left: 0;
}
</style>

<!-- 
<style lang="stylus">


.sidenav-mini
  .md-list-item-holder
    justify-content center
  .md-list-item .md-list-item-holder > .md-icon:first-child, .md-list-item .md-list-item-holder .md-avatar:first-child
    margin-right 0
  .md-list-item .md-list-item-container
    justify-content center
    padding 0
    height 56px
</style> -->
