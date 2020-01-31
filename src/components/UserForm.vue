<template>
  <div class="form_container">
    <h4>user form</h4>
    <form class="form_user">
      <input type="text" placeholder="name" v-model="name" />

      <input type="text" placeholder="surname" v-model="surname" />

      <input type="email" required placeholder="email" v-model="email" />

      <input type="text" placeholder="street" v-model="address.street" />

      <input type="number" placeholder="house number" v-model="address.houseNumber" />

      <input type="text" placeholder="city" v-model="address.city" />

      <input type="text" placeholder="postcode" v-model="address.postCode" />
      <input type="submit" @click.prevent="ConfirmOrder" />
    </form>
    <ul></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Piter",
      surname: "Pater",
      email: "piter@gmail.com",
      address: {
        street: "piterstreet",
        houseNumber: "14",
        city: "Petersburg",
        postCode: "250-500"
      }
    };
  },
  methods: {
    ConfirmOrder() {
      console.log("The order have been Received");
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        address: {
          street: this.address.street,
          houseNumber: this.address.houseNumber,
          city: this.address.city,
          postCode: this.address.postCode
        }
      };
      user.products = [
        ...this.$store.state.productCart.map(product => product[0])
      ];

      console.log(user);
    }
  }
};
</script>

<style>
.form_user {
  padding: 2rem;
  border-radius: 5px;
  margin: 5rem auto;
  box-shadow: 0 0 0.5rem lightgrey;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form_user input {
  margin: 0.8rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 250px;
  border: none;
  border-bottom: 1px solid #000;
  transition: 0.5s;
  cursor: pointer;
}
.form_user input:last-child {
  cursor: pointer;
  border: none;
  border: 1px solid darkgray;
}
.form_user input:hover:last-child {
  background: lightgrey;
}
.form_user input:focus {
  outline: none;
  border-bottom: 1px solid rgb(0, 180, 45);
}
.form_user input:hover {
  outline: none;
  background: rgba(15, 197, 24, 0.1);
}
</style>