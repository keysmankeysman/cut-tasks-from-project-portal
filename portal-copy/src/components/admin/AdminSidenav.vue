<template>
  <md-drawer :md-active.sync="showNavigation" md-swipeable>

    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">Для админа</span>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>edit</md-icon>
        <span class="md-list-item-text">Тематические наборы</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>perm_media</md-icon>
        <span class="md-list-item-text">Ресурсы</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>mdi-chart-pie</md-icon>
        <span class="md-list-item-text">Аналитические показатели</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>show_chart</md-icon>
        <span class="md-list-item-text">Статистика</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>extension</md-icon>
        <span class="md-list-item-text">Внешние приложения</span> 
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>important_devices</md-icon>
        <span class="md-list-item-text">Настройки страницы</span> 
        <md-list slot="md-expand">
          <md-list-item class="md-inset">
            <md-icon>extension</md-icon>
            <span class="md-list-item-text">Внешние приложения</span> 
          </md-list-item>
          <md-list-item class="md-inset">
            <md-icon>list</md-icon>
            <span class="md-list-item-text">Виджеты стартовой страницы</span> 
          </md-list-item>
          <md-list-item class="md-inset">
            <md-icon>email</md-icon>
            <span class="md-list-item-text">Рассылка новостей</span> 
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-divider></md-divider>

      <md-list-item>
        <md-icon>account_box</md-icon>
        <span class="md-list-item-text">Профиль</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>home</md-icon>
        <span class="md-list-item-text">Главная страница</span> 
      </md-list-item>
      <md-list-item>
        <md-icon>apps</md-icon>
        <span class="md-list-item-text">Приложения</span> 
      </md-list-item>

      <md-list-item @click="logout">
        <md-icon>exit_to_app</md-icon>
        <span class="md-list-item-text">Сменить пользователя</span> 
      </md-list-item>
      <md-divider></md-divider>
      <md-list-item>
        <md-icon>help</md-icon>
        <span class="md-list-item-text">Справка</span> 
      </md-list-item>

    </md-list>

  </md-drawer>
</template>

<script>

export default {
  name: 'sidenav-admin',
  data() {
    return {
      showNavigation: false,
    }
  },
  methods:{
    toggle () {
      this.showNavigation = true
    },
    logout() {
      console.log('логаут')
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
}

</style>

<!-- 
<style lang="stylus">


.sidenav-admin
  .md-list-item-holder
    justify-content center
  .md-list-item .md-list-item-holder > .md-icon:first-child, .md-list-item .md-list-item-holder .md-avatar:first-child
    margin-right 0
  .md-list-item .md-list-item-container
    justify-content center
    padding 0
    height 56px
</style> -->
