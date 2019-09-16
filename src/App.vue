<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Bank </span>
        <span class="font-weight-light">Users</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2"></span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Users />
    </v-content>
  </v-app>
</template>

<script>
import Users from './components/user-profile'

export default {
  name: 'App',
  components: {
    Users,
  },
  data: () => ({

  }),
};
</script>
