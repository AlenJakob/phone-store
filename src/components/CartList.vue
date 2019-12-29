<template>
  <div class="product_cart-list">
    <ul class="products_list-order">
      <li class="product_item" v-for="prod in this.$store.state.productCart" :key="prod.id">
        <span>{{prod[0].name}}</span>
        <span>
          <b>{{prod[0].price}} $</b>
          <s>{{prod[0].oldPrice}} $</s>
        </span>
      </li>
    </ul>
    <h2>Total</h2>
    <div>{{totalVal.toFixed(2)}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    totalVal() {
      return this.$store.state.productCart
        .map(e => e[0].price)
        .reduce((a, b) => {
          return a + b;
        }, 0);
    }
  }
};
</script>

<style >
.product_cart-list {
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: 0 0 1rem rgb(165, 165, 165);
  width: 800px;
}
.product_item {
  padding: 1rem 0;
}
.product_item span {
  margin: 0.2rem;
  width: 100%;
}
.product_item span:first-child {
  text-align: center;
}
.product_item span:last-child {
  color: red;
  font-size: 0.8rem;
}
.product_item span:last-child b {
  color: #000;
  margin-right: 0.5rem;
}
.products_list-order {
  padding: 0;
}
</style>

