<template>
    <div class="contentcontainer">
        <h2 class="title">Users</h2>
        <div class="column" v-if="users">
            <div :key="users" class="name">{{users.name}} {{users.last}}</div>
        </div>
    </div>
</template>

<script>
import {data} from '../shared/data'

export default {
    name: 'Users',
    data() {
        return {
            users: []
        }
    },
    methods: {
        async loadUsers() {
            this.users = await data.getUsers()  
            console.log(this.users)
        }
    },
}
</script>