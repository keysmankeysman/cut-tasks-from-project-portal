<template>
  <div class="content">
    <md-field>
      <label>Пользователь</label>
      <md-input v-model="user.name"></md-input>
    </md-field>
    <md-field>
      <label>Пароль</label>
      <md-input v-model="user.pass" type="password"></md-input>
    </md-field>
    <div class="login__top-btns">
      <md-button class="md-raised md-primary color-blue login__top-btn login__top-btn-1">Войти</md-button>
      <md-button class="md-raised md-primary color-blue login__top-btn login__top-btn-2">Без авторизации</md-button>
    </div>

    <md-button class="md-raised md-primary color-blue login__top-btn login__top-btn-3">Вход через ЕСИА</md-button>
  <!-- div.content
    md-input-container
      label Пользователь
      md-input(v-model="username", @keydown.native.enter.stop="doDefaultAction" :disabled="showNewPasswordFields")

    md-input-container(md-has-password)
      label Пароль
      md-input(type="password", v-model="password", @keydown.native.enter.stop="doDefaultAction" :disabled="showNewPasswordFields")

    md-input-container(v-if="showNewPasswordFields" md-has-password)
      label Новый пароль
      md-input(type="password", v-model="newPassword", @keydown.native.enter.stop="doDefaultAction")
    md-input-container(v-if="showNewPasswordFields" md-has-password)
      label Повтор пароля
      md-input(type="password", v-model="newPasswordVerification", @keydown.native.enter.stop="doDefaultAction")
    md-subheader.md-warn(v-if="showNewPasswordFields") Длина пароля должна быть от 8 до 32 символов. Пароль должен содержать только латинские заглавные и прописные буквы, цифры и символы ! @ # $ % ^ & * ( ) - _ + = ; : , . / ? \ | ` ~ [ ] { } (как минимум по одному из перечисленных).
    div.actions
      md-button.md-raised.md-primary(@click.native="login" v-if="!showNewPasswordFields") Войти
      md-button.md-raised.md-primary(@click.native="setPassword" v-if="showNewPasswordFields" :disabled="!this.newPassword || !this.newPasswordVerification") Сохранить и войти
      md-button.md-raised.md-primary(@click.native="noAuthorization") Без авторизации -->
    


  </div>
</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {

  },
}



</script>
  
<style scoped>

.content {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  margin-top: 36px;
}

.login__top-btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login__top-btn {
  width: 100%;
  margin: 6px 0px;
}

.login__top-btn-1, .login__top-btn-2 {
  width: 48%;
}

.login__top-btn-3 {
  background: linear-gradient(90deg, rgba(13,103,175,1) 0%, rgba(239,65,88,1) 100%) !important;
}

</style>

  