<template>
  <div class="form_container">
    <form class="form_user">
      <input type="text" placeholder="name" v-model="name" />

      <input type="text" placeholder="surname" v-model="surname" />

      <input type="email" required placeholder="email" v-model="email" />

      <input type="text" placeholder="street" v-model="address.street" />

      <input type="number" placeholder="house number" v-model="address.houseNumber" />

      <input type="text" placeholder="city" v-model="address.city" />

      <input type="text" placeholder="postcode" v-model="address.postCode" />
      <button class="confirm_btn" type="submit" @click.prevent="ConfirmOrder">Confirm Order</button>
    </form>
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
