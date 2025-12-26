export const sections = {
  BaseMaps: 0,
  Layers: 10,
  LayerManager: 20,
  ClearMap: 30,
  Legend: 40,
  SaveMap: 50,
  MyPlaces: 60,
  MapLink: 70,
  Administration: 80,
  Help: 90,
  Feedback: 100,
  Apps: 105,
  Logout: 110,
  Analytics: 120,
  Login: 130,
  Index: 140
}

const items = [
  {
    id: 1,
    icon: 'terrain',
    name: 'Топографические основы',
    type: sections.BaseMaps,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 2,
    icon: 'map',
    name: 'Картографические материалы',
    type: sections.Layers,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 3,
    icon: 'layers',
    name: 'Опубликованные слои',
    type: sections.LayerManager,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 4,
    icon: 'layers_clear',
    name: 'Очистить карту',
    type: sections.ClearMap,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 5,
    icon: 'list',
    name: 'Легенда',
    type: sections.Legend,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 6,
    icon: 'file_download',
    name: 'Сохранить карту',
    type: sections.SaveMap,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 7,
    icon: 'place',
    name: 'Мои места',
    type: sections.MyPlaces,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 8,
    icon: 'mdi-chart-pie',
    name: 'Аналитика',
    type: sections.Analytics,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true,
    additionalConditions(thematicSet){
      return thematicSet.indicators && thematicSet.indicators.length !== 0
    }
  },
  {
    id: 9,
    icon: 'link',
    name: 'Ссылка на карту',
    type: sections.MapLink,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 10,
    icon: 'settings',
    name: 'Администрирование',
    type: sections.Administration,
    allowAdministrator: true
  },
  {
    id: 11,
    icon: 'help',
    name: 'Справка',
    type: sections.Help,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 12,
    icon: 'mail',
    name: 'Написать администратору',
    type: sections.Feedback,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 13,
    icon: 'home',
    name: 'Главная страница',
    type: sections.Index,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 14,
    icon: 'apps',
    name: 'Приложения',
    type: sections.Apps,
    allowGuest: true,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 15,
    icon: 'exit_to_app',
    name: 'Сменить пользователя',
    type: sections.Logout,
    allowAdministrator: true,
    allowUser: true
  },
  {
    id: 16,
    icon: 'account_circle',
    name: 'Войти',
    type: sections.Login,
    allowGuest: true
  }
]

export default {
  computed:{
    // items() {
    //   if (!this.user || !this.config) {
    //     return []
    //   }
    //   return items.filter(a => this.getRelevantItemsOnUser(a, this.user, this.config))
    // }
    items() {
      return items
    }
  },
  methods: {
    select(item) {
      console.log('select', item)
      this.$emit('select', item)
    },
    getRelevantItemsOnUser(item, user, thematicSet){
      if (!item) return true

      if (item.additionalConditions && !item.additionalConditions(thematicSet)){
        return false
      }

      //гость
      if (user.isGuest){
        return item.allowGuest
      }

      //администратор
      if (item.allowAdministrator && !item.allowUser){
        return user.permissions.administration
      }

      if (!user.socialId && item.allowSocialUser) {
        return true
      }

      //пользователь
      return item.allowUser
    }
  }
}