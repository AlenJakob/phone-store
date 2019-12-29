<template>
  <div class="product_item">
    <div v-if="show" class="msg-box">Product has been added to cart</div>
    <ul class="product_list">
      <li class="product_details" v-for="product in productName" :key="product.id">
        <div>
          <span class="product_price-list">
            <h3 class="product_price">{{product.price + "$"}}</h3>
            <h5 class="product_price-old">{{product.oldPrice + "$" }}</h5>
          </span>
        </div>
        <img class="product_img" src="../img/product.png" alt="product image" />
        <h3>{{product.name }}</h3>
        <div class="select_options">
          <select @change="pickColor">
            <option v-for="color in product.options[0].values" :key="color.id">{{color.name }}</option>
          </select>
          <select @change="pickSize">
            <option
              v-for="size in product.options[1].values"
              :key="size.id"
              :value="size.id"
            >{{size.name}}</option>
          </select>
        </div>
        <!-- <button class="product_btn" @click="addProduct(product)">Add to cart</button> -->
        <button class="product_btn" @click="addProductToCart(product)">addProductToCart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      colorId: 1000,
      sizeId: 1100,
      productId: 1,
      msgSuccess: 1000
    };
  },
  methods: {
    clearMsg() {
      this.show = !this.show;
    },
    successMsg() {
      this.show = true;
      setTimeout(this.clearMsg, this.msgSuccess);
    },
    pickColor(event) {
      this.colorId = event.target.value;
    },
    pickSize(event) {
      this.sizeId = event.target.value;
    },
    addProductToCart(product) {
      this.productID = product.id;
      console.log("ID", this.productID);
      const productItem = this.$store.state.products.filter(
        prod => prod.id === product.id
      );
      this.$store.commit("ADD_PRODUCT", productItem);
      this.successMsg();
    }
  },
  computed: {
    productName() {
      return this.$store.state.products.map(product => product);
    }
  },
  mounted() {}
};
</script>

<style>
.msg-box {
  top: 0;
  position: absolute;
  background: greenyellow;
  padding: 1rem;
}
.product_list {
  display: flex;
}
.product_price-list {
  display: flex;
}
.product_price-old {
  color: rgb(77, 77, 77);
}
.product_price-old {
  text-decoration: line-through;
}
.product_item {
  display: flex;
  justify-content: center;
}

.product_details {
  list-style: none;
  max-width: 200px;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgb(207, 207, 207);
}
.select_options {
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.select_options select {
  margin: 0.5rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
}
.product_details {
  border: 1px solid rgb(212, 212, 212);
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.product_details:hover {
  box-shadow: 0 0 1rem rgb(148, 148, 148);
}
.product_img {
  max-width: 200px;
}
.product_btn {
  padding: 0.5rem;
  margin: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid grey;
  cursor: pointer;
}
.product_btn:hover {
  opacity: 0.8;
}
.product_price,
.product_price-old {
  margin: 1rem 0.2rem;
}
</style>