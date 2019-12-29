<template>
  <div>
    <!-- <select @change="pickColor(event)">
      <option
        v-for="color in products.options[0].values"
        :key="color.id"
        :value="color.id"
      >{{color.name }}</option>
    </select> -->



  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    pickColor(event) {
      this.colorId = event.target.value;
      console.log("color ID", this.colorId);
    }
  },
  mounted() {
    // this.$store.state.products.forEach(e => console.log(e));
    // console.log("test", this.products);
    console.log("option component test");
  },
  computed: {
    productsOptions() {
      return this.$store.state.products;
    }
    // ,
    // productsOptions() {
    //   return this.$store.state.products.map(e => e);
    // }
  }
};
</script>

<style>
</style>