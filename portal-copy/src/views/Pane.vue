<template>
<div class="layout pane">
  <md-layout md-column>
    <md-toolbar class="md-primary color-blue">
      <slot name='actions'>
        <md-button class='md-icon-button' title='Закрыть' @click.native="close">
          <md-icon> close </md-icon>
        </md-button>
      </slot>
      <h2 class="md-title">{{ title }}</h2>
    </md-toolbar>

    <div class="content" ref="panecontent">
      <slot></slot>
    </div>

  </md-layout>
</div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    close () {
      this.$emit('close')
    },
    scrollToTop () {
      this.$refs.panecontent.scrollTop = 0
    }
  }
}
</script>

<style scoped>

.content {
  flex: 1;
  overflow: auto; 
}
</style>

<!-- <style lang="stylus" scoped>
.layout
  background #fff 
  position absolute
  top 0 
  left 0 
  right 0 
  bottom 0
  z-index 1

.md-layout
  height 100%

.md-title
  flex 1
  
.content
  flex 1
  overflow auto

@media only screen and (min-width: 768px)
  .layout
    right auto
    width 400px

// Отображен mini sidebar.
@media only screen and (min-width : 992px) and (min-height: 864px)
  .layout
    left 80px
    top 7px
    bottom 95px
</style> -->