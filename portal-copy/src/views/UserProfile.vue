<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item user-profile-current">
      <md-field>
        <label>Имя</label>
        <md-input v-model="formData.name"></md-input>
      </md-field>
      <md-field>
        <label>Телефон</label>
        <md-input v-model="formData.phone"></md-input>
      </md-field>
      <md-field>
        <label>Новый пароль</label>
        <md-input v-model="formData.pass"></md-input>
      </md-field>
      <md-field>
        <label>Повтор пароля</label>
        <md-input v-model="formData.passRepeat"></md-input>
      </md-field>
      <md-button class="btns md-raised md-primary">Сохранить</md-button>
      <md-button class="btns md-raised md-primary">Выйти</md-button>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>


export default {
  name: 'UserProfile',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        pass: '',
        passRepeat: '',
      }
    }
  },
  methods: {

  },
}



</script>
  
<style scoped>

.btns {
  background-color: #3f51b5 !important;
}

.user-profile-current {
  margin-top: 40px;
}

</style>
  