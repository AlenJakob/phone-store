<template>
  <div class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 rounded"
      >
        <div
          class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
          >
            <router-link
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              to="/"
            >
            <i class="fas fa-mobile fa-2x"></i>
              PhoneShop
            </router-link>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div
            v-bind:class="{ hidden: !menuShow, flex: menuShow }"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item" tag="router-link" to="/">
                <router-link
                  class="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  Store
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/retour"
                >
                  Retour
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/new"
                >
                  New Products
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/contact"
                >
                  Contact us
                </router-link>
              </li>
              <Cart />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Cart from "./Cart";
export default {
  components: {
    Cart,
  },
  name: "blue-menu",
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.menuShow = !this.menuShow;
    },
  },
};
</script>