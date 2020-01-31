<template>
  <div class="shopingCart">
    <router-link class="back-btn back_text" to="/">
      <img class="arrow_back-ico" src="../img/return.png" alt />
      <b class="back_text">Back to Store</b>
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

<style scoped>
.shopingCart {
  width: 800px;
  margin: 0 auto;
}
.back-btn {
  width: 160px;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(47, 79, 79, 0.212);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.back-btn:hover {
  border: 1px solid rgba(47, 79, 79, 1);
}
.back-btn:hover .arrow_back-ico {
  transform: translateX(-5px);
}
.back_text {
  font-size: 0.9em;
  text-decoration: none !important;
  list-style: none;
  color: rgb(8, 58, 17);
}
.arrow_back-ico {
  opacity: 0.8;
  width: 30px;
  margin: 0 1rem;
}
</style>
