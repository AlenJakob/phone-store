<template>
  <div class="product_item">
    <div v-if="show" class="msg-box">
      <svg
        class="thumb_ico"
        aria-hidden="true"
        focusable="false"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 8 8"
      >
        <path
          d="M4.47 0C4.28.02 4.1.15 4 .34C3.87.6 2.91 2.53 2.72 2.72C2.53 2.91 2.28 3 2 3v4h3.5c.21 0 .39-.13.47-.31C5.97 6.69 7 3.78 7 3.5c0-.28-.22-.5-.5-.5H5c-.28 0-.5-.25-.5-.5S4.89.92 4.97.66a.504.504 0 0 0-.31-.63C4.59.01 4.54-.01 4.47 0zM0 3v4h1V3H0z"
          fill="darkgreen"
        />
      </svg>
      Product has been added to cart
      <svg
        class="cart_ico"
        aria-hidden="true"
        focusable="false"
        width="1.13em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 576 512"
      >
        <path
          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          fill="green"
        />
      </svg>
    </div>
    <ul class="product_list">
      <li class="product_details" v-for="product in productName" :key="product.id">
        <div class="product_left_side">
          <img class="product_img" src="../img/product.png" alt="product image" />
          <div class="product_spec">
            <h3 class="product_title">{{product.name }}</h3>
            <ul class="product_spec-list">
              <li>
                Screen:
                <b>6.0</b>
              </li>
              <li>
                Procesor:
                <b>Apple A10</b>
              </li>
              <li>
                Memmory
                <b>128GB</b>
              </li>
              <li>
                Sysytem
                <b>IOS</b>
              </li>
            </ul>
          </div>
        </div>
        <div class="product_right_side">
          <span class="product_price-list">
            <h3 class="product_price">{{product.price + "$"}}</h3>
            <h5 class="product_price product_price-old">{{product.oldPrice + "$" }}</h5>
          </span>
          <ProductOption :productID="product.id" :productDetails="product" />

          <button class="product_btn" @click="addProductToCart(product)">Add To Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductOption from "../components/ProductOption";
export default {
  components: {
    ProductOption
  },
  data() {
    return {
      show: false,
      colorId: 1000,
      sizeId: 1100,
      productID: 0,
      productDetails: null,
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
      productItem.id = product.id;
      productItem.option = [{ color: this.colorId, capacity: this.sizeId }];
      console.log(productItem);
      console.log(this.productDetails);
      this.$store.commit("ADD_PRODUCT", productItem);
      this.successMsg();
    }
  },
  computed: {
    productName() {
      return this.$store.state.products.map(product => product);
    }
  }
};
</script>

<style>
.product_title,
.product_price {
  color: #2d9cbf;
}
.thumb_ico {
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
.cart_ico {
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  color: pink;
}
.thumb_ico,
.cart_ico {
  padding: 0 0.5rem;
}
.product_price {
  margin: 0;
  padding: 0;
  text-align: right;
}
.product_price:first-child {
  margin-bottom: 5px;
}
.product_price:last-child {
  margin-bottom: 15px;
}
.product_price-old {
  text-align: right;
}
.product_left_side,
.product_right_side {
  flex-grow: 2;
  min-height: 300px;
}
.product_left_side {
  display: flex;
  flex-grow: 1;
}
.msg-box {
  z-index: 100;
  bottom: 2rem;
  position: fixed;
  background: greenyellow;
  padding: 1rem;
  border: 1px solid #a6ca8a;
  border-radius: 5px;
}
.product_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_price-list {
  display: flex;
  flex-direction: column;
}

.product_price-old {
  color: rgb(177, 177, 177);
  text-decoration: line-through;
}

.product_item {
  display: flex;
  justify-content: center;
}

.product_details {
  min-height: 350px;
  width: 860px;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgb(207, 207, 207);
  border: 1px solid rgb(212, 212, 212);
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  flex-direction: row;
  cursor: pointer;
}
.select_options {
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product_details:hover {
  box-shadow: 0 0 11px rgb(148, 148, 148);
}
.product_img {
  /* background:url("../img/product.png");
   */
  width: 300px;
  height: auto;
  background-size: cover;
  background-position: center;
}
.product_btn {
  margin-top: 15px;
  text-align: center;
  background: #59bad9;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #4f96be;
  cursor: pointer;
}
.product_btn:hover {
  opacity: 0.8;
}

.product_spec-list li {
  list-style: none;
  font-size: 14px;
}
.product_spec-list li,
.product_title {
  text-align: left;
  margin: 5px;
  padding: 5px 40px;
}
</style>