<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Store</router-link>
      <router-link to="/about">Retour</router-link>
      <router-link to="#">Contact</router-link>
    </div>-->
    <Cart />
    <router-view />
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
</style>
