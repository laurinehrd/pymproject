<template>
  <div id="app">
    <div class="sidebar-menu">
      <div class="logo">
        <h1 @click="goHome()">Pym</h1>
      </div>
      <router-link to="/meals"><menu-item menu="Plats" nameIcon="meal"/></router-link>
      <router-link to="/ingredients"><menu-item menu="Ingrédients" nameIcon="ingredient"/></router-link>
      <router-link to="/categories"><menu-item menu="Catégories" nameIcon="category"/></router-link>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MenuItem from './components/items/MenuItem.vue'
export default {
  components: { MenuItem },
  name: 'App',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
a.router-link-active .menu-item {
  background-color: #F38E69;
  color: white;
  font-weight: bold;
}
a.router-link-active .menu-item svg.meal {
  stroke: white;
}
a.router-link-active .menu-item svg.ingredient, a.router-link-active .menu-item svg.category {
  fill: white;
}
body {
  margin: 1rem;
}
h1 {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
/* Stylisation scrollbar : Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(243, 142, 105, 0.5);
  border-radius: 25px;
}

#app {
  font-family: 'Gilroy', 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  display: flex;
}
.sidebar-menu {
  background-color: #FCE9E1;
  border-radius: 10px;
  width: 25%;
  height: 92vh;
  padding: 1rem;
}
.logo {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
}
h1 {
  font-family: 'Lobster Two';
  font-size: 36px;
  color: #F38E69;
  margin: 0;
}
.main {
  width: 75%;
  padding: 1rem;
  height: 100vh;
  overflow: scroll;
}
</style>
