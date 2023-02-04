<!--
 * @version: 
 * @Author: wenlan
 * @Date: 2022-10-30 18:38:00
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-08 16:22:53
-->
<script setup>
import { ref } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import { RouterLink, RouterView } from 'vue-router'
const value1 = ref(0)
const value2 = ref([20, 50])
const disabled = ref(false)
const changeTheme = (theme) => {
  switch (theme) {
    case 'default':
      document.documentElement.className = 'theme-default'
      break
    case 'red':
      document.documentElement.className = 'theme-red'
      break
  }
}
const setAntDColor = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: 'green',
    },
  })
}
</script>

<template>
  <a-spin />
  <Icon name="icon-linuxfoundation" size="18px" />
  <Icon name="local-icon-sw" size="18px" color="green" />
  <Icon name="local-icon-print" size="18px" color="blue" />
  <Icon name="el-icon-House" size="18px" color="red" />
  <el-icon-AddLocation style="width: 20px" />
  <a-icon-AccountBookOutlined style="width: 20px" />
  <span>1111</span>
  <a-alert message="Success Text" type="success" />
  <a-alert message="Info Text" type="info" />
  <a-alert message="Warning Text" type="warning" />
  <a-alert message="Error Text" type="error" />
  <a-slider id="test" v-model="value1" :disabled="disabled" />
  <a-slider v-model="value2" range :disabled="disabled" />
  <span class="color">我司达到我看到卡瓦尼开挖</span>
  <span class="color1">测试less数据</span>
  <a-button @click="changeTheme('default')">默认主题</a-button>
  <a-button @click="changeTheme('red')">红色主题</a-button>
  <a-button @click="setAntDColor">ant-design-vue</a-button>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style lang="less">
.color {
  color: var(--wenlan-6);
}
.color1 {
  color: @primary-1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
