<template>
  <div>
    <md-toolbar class="toolbar md-primary">

      <md-button class="md-icon-button" @click="openMenu" v-if="!isAdmin">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button class="md-icon-button" @click="openAdminMenu" v-else>
        <md-icon>menu </md-icon>
      </md-button>
      <span class="md-title">{{ title }}</span>

      <div class="search">
        <md-field v-if="isShowSearch">
          <label>Поиск приложений</label>
          <md-input  v-model="searchText"></md-input>
        </md-field>
        <md-button class="md-icon-button clear" title="Очистить" v-show="searchText" @click.native="clear">
          <md-icon>clear</md-icon>
        </md-button>
      </div>

    </md-toolbar>
    <main-sidenav ref="sidenav" v-if="!isAdmin"></main-sidenav>
    <admin-sidenav ref="sidenavAdmin" v-else></admin-sidenav>
  </div>
</template>

<script>
import MainSidenav from '@/components/MainSidenav'
import AdminSidenav from '@/components/admin/AdminSidenav'
import { EventBus, Messages } from '@/functions/eventBus.js'

export default {
  components: { MainSidenav, AdminSidenav },
  data() {
    return {
      title: 'Региональная геоинформационная система ЛО',
      showNavigation: false, 
      searchText: '',
      isShowSearch: false,
      isAdmin: true,
    }
  },
  computed: {
    urlsFromStore() {
       return this.$store.state.urls
    },
  },
  watch: { 
    '$route': {
      handler(search) {
        const currentUrl = this.urlsFromStore.find(el => el.path === search.path)
        if (currentUrl) {
          if (currentUrl.path === '/apps') {
            this.isShowSearch = true
          } else if (currentUrl.path === '/admin/apps') {
            this.isShowSearch = false
          } else {
            this.isShowSearch = false
          }
          this.title = currentUrl.title
        }
      },
      deep: true,
      immediate: true
    },
    searchText (val) {
      EventBus.$emit(Messages.upSearchText, val)
    },
  }, 
  methods: {
    openMenu() {
      this.$refs.sidenav.toggle()
    },
    openAdminMenu() {
      this.$refs.sidenavAdmin.toggle()
    },
    clear() {
      this.searchText = ''
      EventBus.$emit(Messages.upSearchText)
    }
  }
}



</script>
  
<style scoped>
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}

.toolbar {
  background: #3f51b5 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  display: flex;
  align-items: center;
}

.md-field.md-theme-default:after {
  background-color: rgba(255,255,255,0.6);
}

.md-field label {
  color: rgba(255, 255, 255, .7) !important;
}

</style>
  