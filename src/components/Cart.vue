<template>
  <div class="product_cart">
    <router-link class="shoping_cart" to="/shopingCart">
      <b class="amount_cart">{{this.$store.state.productCart.length}}</b>
      <img class="img_cart" src="../img/cart.png" alt />
    </router-link>
  </div>
</template>

<script>
</script>

<style>
.amount_cart {
  border: 1px solid #4f96be;
  background: #fff;
  width: 30px;
  height: 30px;
  padding: 0.3rem;
  border-radius: 50%;
  transform: translate(15px, 25px);
}
.shoping_cart {
  display: flex;
  flex-direction: column;
}
.product_cart {
  position: fixed;
  top: 1rem;
  right: 6rem;
}
.product_cart a {
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  color: #59bad9;
  font-size: 1.5rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_cart {
  width: 50px;
}
</style>