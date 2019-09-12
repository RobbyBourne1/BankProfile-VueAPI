<template>
            <v-container class="col-12">
                <div class="d-flex flex-column align-center justify-space-between">
                    <v-card class="d-flex flex-column align-center col-2 justify-space-around" raised outlined v-for="user in users" :key="user.name"> 
                        <v-card-title class="">       
                                {{user.name}} 
                        </v-card-title>
                        <v-card-text class="d-flex justify-center">Height: {{user.height}} cms</v-card-text>
                        <v-card-text class="d-flex justify-center">Weight: {{user.mass}} lbs</v-card-text>
                        <v-card-text class="d-flex justify-center">DOB: {{user.created}}</v-card-text>
                    </v-card>    
                </div>
            </v-container>  
</template>

<script>
import {data} from '../shared/data'

export default {
    name: 'Users',
    data() {
        return {
            users: [],
        }
    },
    created: function () {
        this.loadUsers()
    },
    methods: {
        async loadUsers() {
            this.users = await data.getUsers()  
            console.log(this.users)
        }
    },
}
</script>