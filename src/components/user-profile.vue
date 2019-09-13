<template>
        <v-container class="col-10">
            <div class="d-flex flex-row flex-wrap justify-center col-12">
                <v-card class="d-flex flex-column align-center col-3 justify-space-around" raised outlined v-for="user in users" :key="user.name"> 
                    <v-card-title class="">       
                            {{user.name}} 
                    </v-card-title>
                    <v-card-text class="d-flex justify-center">Height: {{user.height}} CMs</v-card-text>
                    <v-card-text class="d-flex justify-center">Weight: {{user.mass}} KGs</v-card-text>
                    <v-card-text class="d-flex justify-center">DOB: {{user.birth_year}}</v-card-text>
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