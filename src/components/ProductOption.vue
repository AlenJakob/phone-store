<template>
  <div>
    <div class="product_opt_spec">
      <span class="product_opt">Color:</span>
      <select class="product_select" @change="getColorID($event)">
        <option>Pick Color</option>
        <option
          v-for="prodColor in productDetails.options[0].values"
          :key="prodColor.id"
          id="product_ID"
          :value="prodColor.id"
        >{{prodColor.name}}</option>
      </select>
    </div>
    <div class="product_opt_spec">
      <span class="product_opt">Capacity:</span>
      <select class="product_select" @change="getCapacityID($event)">
        <option
          v-for="prodCapacity in productDetails.options[1].values"
          :key="prodCapacity.id"
          :value="prodCapacity.name"
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
      prodDetails:  { colorID: "1000", capacityID: "1100" }
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
    },
    test() {
      console.log(
        "this is color ",
        this.prodDetails.colorID,
        "and this is capacity",
        this.productDetails.capacityID
      );
    }
  },
  computed: {
    getProductColor() {
      let id = this.productID - 1;
      let prodID = this.$store.state.products[id];
      let prodValues = Object.values(prodID);
      console.log("SSS", prodValues[4][0].values);
      return prodValues[4][0].values;
    },
    getProductCapacity() {
      let id = this.productID - 1;
      let prodID = this.$store.state.products[id];
      let prodValues = Object.values(prodID);
      return prodValues[4][1].values;
    }
  },
  mounted() {
    
     
  }
};
</script>

<style >
option {
  cursor: pointer;
  cursor: hand;
}
.product_select option {
  text-align-last: center;
  text-align: center;
}
.product_select {
  font-weight: bold;
  color: #444;
  cursor: pointer;
  text-align-last: center;
  border-radius: 5px;
  border: 2px solid #dedede;
  width: 100%;
  height: 36px;
}

.product_opt_spec {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.product_opt {
  margin-bottom: 5px;
  text-align: left;
  color: #c1c1c1;
  font-size: 12px;
}
</style>