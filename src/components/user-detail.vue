<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image">
            <img :src="user.picture.medium" />
          </figure>
        </div>
        <div class="media-content is-parent">
          <p class="title">{{fullName | titleCaseString}}</p>
          <p class="subtitle">{{clonedUser.location.state | titleCaseString}}</p>
          <p>Address: {{clonedUser.location.street | titleCaseString}}, {{clonedUser.location.city | titleCaseString}}</p>
          <p>Area Descritpion: {{clonedUser.location.timezone.description | titleCaseString}}</p>
        </div>
        <button class="delete" @click="returnToSearch()"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      clonedUser: { ...this.user }
    };
  },
  computed: {
    fullName() {
      return this.clonedUser
        ? `${this.clonedUser.name.first} ${this.clonedUser.name.last}`
        : "";
    }
  },
  methods: {
    returnToSearch() {
      this.$emit("returnToSearch");
    }
  }
};
</script>
