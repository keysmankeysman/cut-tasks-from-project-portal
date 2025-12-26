<template>
  <div class="managethematicsets">
    <div class="md-layout">
      <md-card-media v-for="app in apps" :key="app.id" class="md-card">
        <img :src="require(`./../../assets/apps/${app.id}.png`)">
        <md-card-header>
          <div class="md-title">{{ app.name }}</div> 
        </md-card-header>
        <md-card-content> {{ app.description }} </md-card-content>
        <md-card-actions>
          <md-button class="md-icon-button" @click="editItem(app)">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" @click="deleteItem(app)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media>
      <md-dialog-confirm
        :md-active.sync="isDelConfirm"
        md-title='Вы действительно хотите удалить этот тематический набор?'
        md-content='Тематический набор будет удален навсегда. Эта операция необратима.'
        md-confirm-text="Да"
        md-cancel-text="Нет"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />
      <md-button class="md-fab add-button">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <!-- <sidenav></sidenav> -->
  </div>
</template>

<script>
// import Sidenav from '@/components/admin/Sidenav'
import { apps } from '@/localdata/apps'

export default {
  name: 'managethematicsets',
  // components: { Sidenav },
  data() {
    return {
      apps,
      isDelConfirm: false,
      valueDelConfirm: null
    }
  },
  methods: {
    onConfirm () {
      this.valueDelConfirm = 'Agreed'
    },
    onCancel () {
      this.valueDelConfirm = 'Disagreed'
    },
    editItem(app) {

      this.$router.push(`/admin/internal/edit/${app.id}`)
      console.log('редактировать')
    },
    deleteItem() {
      this.isDelConfirm = true
      console.log('valueDelConfirm', this.valueDelConfirm)
      console.log('удалить')
    }
  },
}

</script>

<style scoped>
.managethematicsets {
  position: relative;
}

.add-button {
  align-self: center;
  position: absolute;
  top: -30px;
  right: 20px;
  z-index: 2;
  background-color: #e91e63 !important;
}

</style>
  

  