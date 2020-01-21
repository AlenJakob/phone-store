<template>
  <div @change="dziecko">
    <h2>ProductOption</h2>
    <div>
      Color:
      <select @change="getColorID($event)">
        <option>Pick Color</option>
        <option
          v-for="prodColor in productDetails.options[0].values"
          :key="prodColor.id"
          id="product_ID"
          :value="prodColor.id"
        >{{prodColor.name}}</option>
      </select>
    </div>
    <div>
      Capacity:
      <select @change="getCapacityID($event)">
        <option
          v-for="prodCapacity in productDetails.options[1].values"
          :key="prodCapacity.id"
          :value="prodCapacity.id"
        >{{prodCapacity.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productID: Number,
    productDetails: Object
  },
  data() {
    return {
      DataID: this.productID,
      getColorValue: document.querySelector("#product_ID"),
      prodDetails: { colorID: "1000", capacityID: "1100" }
    };
  },
  methods: {
    getColorID(e) {
      this.prodDetails.colorID = e.target.value;
      console.log(this.prodDetails.colorID);
    },
    getCapacityID(e) {
      console.log(this.prodDetails.capacityID);
      this.prodDetails.capacityID = e.target.value;
    }
  },
  computed: {
    getProductColor() {
      let id = this.productID - 1;
      let prodID = this.$store.state.products[id];
      let prodValues = Object.values(prodID);
      return prodValues[4][0].values;
    },
    getProductCapacity() {
      let id = this.productID - 1;
      let prodID = this.$store.state.products[id];
      let prodValues = Object.values(prodID);
      return prodValues[4][1].values;
    }
  },
  mounted() {}
};
</script>

<style >
li {
  border: 2px solid blue;
}
</style>