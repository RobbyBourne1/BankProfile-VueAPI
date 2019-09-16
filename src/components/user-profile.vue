<template>
  <v-container class="col-4">
    <label>Search </label>
    <input type="text" placeholder="search" v-model=filteredData />
    <div class="d-flex flex-row flex-wrap justify-center">
      <v-card
        class="d-flex flex-column align-center col-4 justify-space-around"
        v-for="user in filteredList"
        :key="user.name.first"
      >
        <v-img class="blue--text d-flex col-2" :src="user.picture.large"></v-img>
        <v-card-title
          class="justify-center">
        {{user.name.first | capitalizeName }} {{user.name.last | capitalizeName}}
        </v-card-title>
        <v-card-text>
          <p class="align-center">Address: {{user.location.street | capitalizeAddress}}</p>
          <p>{{user.location.state | capitalizeAddress}}, {{user.location.postcode}}</p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { data } from "../shared/data";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      filteredData: "",
    };
  },
  created: function() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      this.users = await data.getUsers();
    }
  },
  computed: {
    fullName() {
      return this.users.name
        ? `${this.users.name.first} ${this.users.name.last}`
        : "";
    },
    filteredList: function () {
        return this.users.filter(f => {
            return f.name.first.match(this.filteredData.toLowerCase())
        })
    }
  },
  filters: {
    capitalizeName: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    capitalizeAddress: function(value) {
      const address = value
        .split(" ")
        .map(m => {
          return m.charAt(0).toUpperCase() + m.slice(1);
        })
        .join(" ");
      return address;
    },
    filteredList(value) {
    //   const firstName = user.name.first
    //   return this.users.filter(f =>{
    //       return f.firstName.tolowercase().includes(this.filteredData.toLowerCase())
    //   })
      console.log(value);
    }
  }
};
</script>