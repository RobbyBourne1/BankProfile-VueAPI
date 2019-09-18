<template>
  <v-container class="">
    <div v-if="users">
      <v-text-field single-line solo type="text" placeholder="search" v-model="filteredData" v-if="!selectedUser" />
      <div class="d-flex flex-row flex-wrap justify-center" v-if="!selectedUser">
        <v-card
          class="d-flex flex-column align-center col-3 justify-space-around"
          v-for="user in filteredList"
          :key="user.name.first"
        >
          <v-img class="blue--text d-flex col-3" :src="user.picture.large"></v-img>
          <v-card-title
            class="justify-center"
          >{{user.name.first | titleCaseString }} {{user.name.last | titleCaseString}}</v-card-title>
          <v-btn color="primary" @click="selectUser(user)">Select</v-btn>
        </v-card>
      </div>
    </div>
    <div class="columns" style="margin:1em;">
      <UserDetail class="column is-half is-offset-one-quarter" :user="selectedUser" @returnToSearch="returnToSearch" v-if="selectedUser != undefined" />
    </div>
  </v-container>
</template>

<script>
import { data } from "../shared/data";
import UserDetail from "../components/user-detail";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      filteredData: "",
      selectedUser: undefined
    };
  },
  components: {
    UserDetail
  },
  created: function() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      this.users = await data.getUsers();
    },
    selectUser(user) {
      this.selectedUser = user;
    },
    returnToSearch() {
      this.selectedUser = undefined;
    }
  },
  computed: {
    fullName() {
      let fullName = "";
      this.users.forEach(user => {
        fullName = `${user.name.first} ${user.name.last}`;
      });
      return fullName;
    },
    filteredList: function() {
      let fullName = "";
      return this.users.filter(f => {
        fullName = f.name.first + f.name.last;
        return fullName.match(this.filteredData.toLowerCase());
      });
    }
  },
};
</script>