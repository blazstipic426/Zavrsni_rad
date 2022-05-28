<template>
    <nav> 
        <router-link to="/login">Login</router-link> | 
        <router-link to="/signup">Sign Up</router-link> 
  </nav>
    <div class="signup">
        <h1>Sign up</h1>
        <form @submit.prevent="SignUp">
            <input type="text" placeholder="Email" v-model="email" />
            <br>
            <input type="password" placeholder="Password" v-model="password" />
            <br>
            <input type="submit" value="SignUp">
            <p>Have an account? <router-link to="/login">Login here</router-link></p>
        </form>
    </div> 
  
</template>

<script>
import firebase from "firebase";
import {ref} from 'vue';

export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const SignUp = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    
                })
                .catch(Error => alert(Error.message));
        }

        return {
            SignUp,
            email,
            password
        }
    }

};
</script>

<style>

</style>