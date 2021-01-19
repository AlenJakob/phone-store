<template>
  <div>
    <div class="bg-blue-50 py-6 px-6">
      <div
        class="border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between my-4"
      >
        <div class="font-semibold text-gray-800">
          Products ( {{ this.$store.state.productCart.length }} )
        </div>
        <div class="text-red-400">
          <b>Total Price: {{ this.$store.getters.TotalVal.toFixed(2) }} €</b>
        </div>
      </div>
      <hr class="-mx-6 divide-y divide-light-blue-400" />
      <div
        class="flex items-center justify-between my-6 py-6 border-b border-grey-darkest border-solid"
        v-for="(prod, i) in this.$store.state.productCart"
        :key="i"
      >
        <div class="w-24">
          <img class="w-24 h-24" src="../img/product.png" />
        </div>
        <div class="flex-1 pl-2">
          <div class="text-gray-700 font-semibold">{{ prod[0].name }}</div>
          <div class="text-gray-600 font-thin">Web House</div>
        </div>
        <div class="text-red-400 font-semibold">
          {{ prod[0].price }}€
          <p class="line-through">{{ prod[0].oldPrice }}€</p>
        </div>
      </div>
    </div>
    <!--  -->

    <UserForm />
  </div>
</template>

<script>
import UserForm from "./UserForm";
export default {
  components: {
    UserForm,
  },
};
</script>

<style >
.product_cart-list {
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: 0 0 1rem rgb(165, 165, 165);
  width: 800px;
}
.product_item {
  color: #2a74b8;
  color: #2a73b883;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  padding: 1rem 0;
  text-align: left;
}
.product_item span {
  margin: 0.2rem;
  width: 100%;
}
.product_item span:after {
  content: " -";
}
.product_item span:first-child {
  text-align: right;
}
.product_item span:last-child {
  color: #666;
  font-size: 0.8rem;
}
.product_item span:last-child b {
  color: #2a74b8;
  margin-right: 0.5rem;
  font-size: 1rem;
}
.products_list-order {
  padding: 0;
}
</style>

