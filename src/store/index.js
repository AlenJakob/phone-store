import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    products: [],
    productCart: [],
    getProducts: "https://api.npoint.io/9bb4cebec2b9cb34d698",
    getProducts2: "https://api.jsonbin.io/b/600486724f42973a289e17ab/1"
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
        .get(this.state.getProducts2)
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
