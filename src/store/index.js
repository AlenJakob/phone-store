import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    products: [],
    productCart: []
  },
  mutations: {
    LOAD_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, productName) {
      state.productCart.push(productName)
    }
  },
  actions: {
    loadProducts({ commit }) {
      console.log("loadProducts function")
      axios
        .get("https://api.myjson.com/bins/juce4")
        .then(result => { commit('LOAD_PRODUCTS', result.data); console.log(result.data) })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  },
  modules: {}
});


