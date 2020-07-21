<template>
  <nav class="navigation" @scroll="handleScroll">
    <router-link to="/">Store</router-link>
    <router-link to="/retour">Retour</router-link>
    <router-link to="/new">New Products</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      let el = document.querySelector("body");
      console.log("el");
    }
  }
};
</script>

<style>
.navigation-scroll {
  position: fixed;
}
.navigation {
  width: 100%;
  background: #fff;
  padding: 3rem;
  margin-bottom: 2rem;
  border-bottom: 5px solid #afd1e9;
  box-shadow: 0 0 5px rgba(1, 66, 141, 0.295);
}

.navigation a {
  border: 1px solid transparent;
  padding: 1rem 2rem;
  font-weight: bold;
  color: #2d9cbf;
  text-decoration: none;
  margin: 0.5rem;
  border-radius: 10px;
}
.navigation a:hover {
  background: #217d99;
  color: #fff;
  border: 1px solid #4f95be5e;
}
.navigation a.router-link-exact-active {
  color: #217d99;
  background: #fff;
  box-shadow: 0 0 3px rgba(35, 111, 211, 0.262);
}
</style>
