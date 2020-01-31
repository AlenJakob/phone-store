<template>
  <div class="product_cart-list">
    <ul class="products_list-order">
      <li
        class="product_item"
        v-for="prod in this.$store.state.productCart"
        :key="Math.random(prod.id)"
      >
        <span>{{prod[0].name}}</span>
        <span>
          <b>{{prod[0].price}} $</b>
          <s>{{prod[0].oldPrice}} $</s>
        </span>
      </li>
    </ul>
    <h2>Total</h2>
    <div>Total Price: {{this.$store.getters.TotalVal.toFixed(2)}}</div>
    <div>
      <UserForm />
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm";
export default {
  components: {
    UserForm
  }
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
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  padding: 4rem 0;
}
.product_item span {
  margin: 0.2rem;
  width: 100%;
}
.product_item span:first-child {
  text-align: center;
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

