<template>
  <div id="app">
    <Navbar />

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  transition: 0.3s;
}
body {
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: subpixel-antialiased !important;
  text-align: center;
  color: #2c3e50;
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
