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
        {{user.name.first | titleCaseString }} {{user.name.last | titleCaseString}}
        </v-card-title>
        <v-card-text>
          <p class="align-center">Address: {{user.location.street | titleCaseString}}</p>
          <p>{{user.location.state | titleCaseString}}, {{user.location.postcode}}</p>
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
        let fullName = ""
        this.users.forEach(user => {
            fullName = `${user.name.first} ${user.name.last}` 
        });
        return fullName
    },
    filteredList: function () {
        let fullName = "";
        return this.users.filter(f => {
            fullName = f.name.first + f.name.last
            return fullName.match(this.filteredData.toLowerCase())
        })
    }
  },
  filters: {
    titleCaseString: function(value) {
      const address = value
        .split(" ")
        .map(m => {
          return m.charAt(0).toUpperCase() + m.slice(1);
        })
        .join(" ");
      return address;
    },
  }
};
</script>