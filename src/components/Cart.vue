<template>
  <div class="product_cart">
    <router-link to="/shopingCart">
      <img class="img_cart" src="../img/cart.png" alt />
      <b class="amount_cart">{{this.$store.state.productCart.length}}</b>
    </router-link>
  </div>
</template>

<script>
</script>

<style>
.product_cart {
  position: relative;
  margin:2rem;
  height:2rem;
}
.product_cart a {
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  color: red;
  font-size:1.5rem;
  text-decoration: none;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_cart {
  width: 50px;
}
</style>