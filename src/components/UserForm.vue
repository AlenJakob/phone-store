<template>
  <div class="form_container">
    <!-- Root element for center items -->
    <div class="flex flex-col h-screen bg-gray-100">
      <!-- Auth Card Container -->
      <div class="grid place-items-center mx-2 my-20 sm:my-auto">
        <!-- Auth Card -->
        <div
          class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <!-- Card Title -->
          <h2
            class="text-center font-semibold text-3xl lg:text-4xl text-gray-800"
          >
            Order
          </h2>

          <form class="mt-10">
            <!-- Email Input -->
            <div v-for="(val, key) in getUserPersonalInfo" :key="key.id">
              <label
                for="email"
                class="block text-xs font-semibold text-gray-600 uppercase"
                >{{ key }}</label
              >
              <input
                :value="val"
                :id="val"
                type="email"
                name="email"
                placeholder="e-mail address"
                autocomplete="email"
                class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
            </div>
            <div
              v-for="(val, key) in this.currentUser[0].address"
              :key="key.id"
            >
              <label
                for="email"
                class="block text-xs font-semibold text-gray-600 uppercase"
                >{{ key }}
              </label>
              <input
                :value="val"
                :id="val"
                type="email"
                name="email"
                placeholder="e-mail address"
                autocomplete="email"
                class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
            </div>
            <!-- Password Input -->

            <!-- Auth Buttton -->
            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
              @click.prevent="ConfirmOrder"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: [
        {
          name: "Piter",
          surname: "Pater",
          email: "piter@gmail.com",
          address: {
            street: "piterstreet",
            houseNumber: "14",
            city: "Petersburg",
            postCode: "250-500",
          },
        },
      ],
    };
  },

  methods: {
    ConfirmOrder() {
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        address: {
          street: this.address.street,
          houseNumber: this.address.houseNumber,
          city: this.address.city,
          postCode: this.address.postCode,
        },
      };
      user.products = [
        ...this.$store.state.productCart.map((product) => product[0]),
      ];
    },
  },
  computed: {
    getUserPersonalInfo() {
      let objectCopy = { ...this.currentUser[0] };
      delete objectCopy.address;
      return objectCopy;
    },
  }
};
</script>

<style>
.form_user {
  padding: 2rem;
  border-radius: 5px;
  margin: 5rem auto;
  box-shadow: 0 0 0.5rem lightgrey;
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form_user input {
  margin: 0.8rem;
  padding: 1rem 0;
  width: 100%;
  max-width: 350px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.192);
  transition: 0.5s;
  cursor: pointer;
}

.form_user input:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 180, 45, 0.281);
}
.form_user input:hover {
  outline: none;
  background: rgba(166, 233, 222, 0.1);
}
.confirm_btn {
  background: none;
  margin: 3rem auto;
  padding: 1rem 2rem;
  list-style: none;
  color: rgb(8, 58, 17);
  cursor: pointer;
  font-weight: bold;
  width: 160px;
  border-radius: 5px;
  border: none;
  border: 1px solid rgba(47, 79, 79, 0.212);
  outline: none;
}
.confirm_btn:hover {
  border: 1px solid rgba(47, 79, 79, 1);
}
</style>
