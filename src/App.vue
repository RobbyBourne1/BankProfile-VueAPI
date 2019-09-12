<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Star Wars </span>
        <span class="font-weight-light">Characters</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
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
