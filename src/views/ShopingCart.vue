<template>
  <div class="shopingCart">
    <router-link to="/">
      <h4> back to Store</h4>
    </router-link>
    <CartList />
  </div>
</template>

<script>
import CartList from "../components/CartList";
export default {
  components: {
    CartList
  }
};
</script>

<style>
</style>