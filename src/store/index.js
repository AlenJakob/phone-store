import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    products: [],
    productCart: [],
    getProducts: "https://api.myjson.com/bins/a7dky"
  },
  mutations: {
    LOAD_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, productName) {
      state.productCart = [...state.productCart, productName];
    }
  },
  actions: {
    async loadProducts({ commit }) {
      await axios
        // .get("https://api.myjson.com/bins/juce4")
        .get(this.state.getProducts)
        .then(result => {
          commit("LOAD_PRODUCTS", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  },
  getters: {
    TotalVal: state => {
      return state.productCart
        .map(e => e[0].price)
        .reduce((a, b) => {
          return a + b;
        }, 0);
    }
  },
  modules: {}
});
