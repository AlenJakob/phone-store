<template>
  <div class="home">
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";

export default {
  components: { Products },
  computed: {},
  mounted() {
    this.$store.dispatch("loadProducts");
  }
};
</script>
