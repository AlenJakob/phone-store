<template>
  <div class="product_item">
    <Message :show="show" />

    <!-- ---------------------------- -->

    <div class="py-2 bg-gray-50 grid lg:grid-cols-2 md:grid-cols-1 gap-10">
      <div
        class="w-3/2 bg-gray-200 overflow-hidden rounded-xl"
        v-for="(product, i) in productName"
        :key="i"
      >
        <div class="flex">
          <div class="flex-none w-48 relative">
            <img
              :src="product.img"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1
                class="text-blue-800 font-bold flex-auto text-xl font-semibold"
              >
                {{ product.name }}
              </h1>
              <ProductInfo />
              <div class="text-xl font-semibold text-gray-500">
                €{{ product.price }}
              </div>
              <div
                class="w-full flex-none text-sm font-medium text-gray-500 mt-2"
              >
                In stock
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              Free shipping on all continental US orders.
            </p>
            <div class="flex items-baseline mt-4 mb-6">
              <div class="space-x-2 flex">
                <label>
                  <ProductOption
                    :productID="product.id"
                    :productDetails="product"
                  />
                </label>
              </div>
              <div class="ml-auto text-xs underline">Voir plus</div>
            </div>
            <div class="flex space-x-3 mb-4 text-sm font-medium">
              <div class="flex-auto flex space-x-3">
                <button
                  class="uppercase text-xs font-bold w-1/2 flex items-center justify-center rounded-full bg-blue-400 text-white"
                  type="button"
                  @click.stop="addProductToCart(product)"
                >
                  add to cart
                </button>
              </div>
              <button
                class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-red-300 hover:animate-ping"
                type="button"
                aria-label="like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="fill-current text-red-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "../components/ProductInfo";
import ProductOption from "../components/ProductOption";
import Message from "./Message";
export default {
  components: {
    ProductOption,
    ProductInfo,
    Message,
  },
  data() {
    return {
      show: false,
      colorId: 1000,
      sizeId: 1100,
      productID: 0,
      productDetails: null,
      msgSuccess: 1000,
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
      const productItem = this.$store.state.products.filter(
        (prod) => prod.id === product.id
      );
      productItem.id = product.id;
      productItem.option = [{ color: this.colorId, capacity: this.sizeId }];
      this.$store.commit("ADD_PRODUCT", productItem);
      this.successMsg();
    },
  },
  computed: {
    productName() {
      return this.$store.state.products.map((product) => product);
    },
  },
  mounted() {
    console.log();
  },
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
  padding: 1rem;
  border-radius: 5px;
}
.product_list {
  margin-top: 8rem;
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
