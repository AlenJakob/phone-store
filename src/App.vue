<template>
  <div id="app">
    <div id="nav"><Cart />
      <router-link to="/">Store</router-link>
      <router-link to="/about">Retour</router-link>
      <router-link to="#">Contact</router-link>
      
    </div>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Cart from "./components/Cart";
export default {
  components: {
    Cart
  }
};
</script>

<style>
body{
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased !important;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a {
  margin: 0.5rem;
}
ul {
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
