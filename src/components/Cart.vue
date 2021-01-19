<template>
  <div class="">
    <li class="nav-item">
      <router-link
        class="px-3 py-2 text-green-200 flex items-center text-md uppercase font-bold leading-snug hover:opacity-95 hover:text-white"
        to="/shopingCart"
      >
        Shoping Cart<i class="fas fa-shopping-cart ml-2 text-white"></i>
        <span class="ml-1 text-white">
          (
          <a> {{ this.$store.state.productCart.length }}</a>
          )</span
        >
      </router-link>
    </li>
  </div>
</template>

<script>
</script>

<style>
</style>