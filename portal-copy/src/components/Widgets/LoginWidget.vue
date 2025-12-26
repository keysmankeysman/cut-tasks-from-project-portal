<template>
  <div class="login-widget">
    <img class="login-widget__img" src="../../assets/avatar_anonymous.png" />
    <div class="login-widget__btns">
      <md-button class="md-raised md-primary color-blue login-widget__btn">Профиль</md-button>
      <md-button class="md-raised md-primary color-blue login-widget__btn">Выйти</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWidget',
  props: ['img'],
  data() {
    return {

    }
  },
  methods:{

  },
}
</script>

<style scoped>

.login-widget {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 85px;
}

.login-widget__img {
  width: 100%;
  max-width: 150px;
}

.login-widget__btns {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 152px;
}

.login-widget__btn {
  width: 48% !important;
}

</style>

