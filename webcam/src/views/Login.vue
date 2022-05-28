<template>
    <nav> 
        <router-link to="/login">Login</router-link> | 
        <router-link to="/signup">Sign Up</router-link> 
  </nav>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <input type="text" placeholder="Email" v-model="email" />
            <br>
            <input type="password" placeholder="Password" v-model="password" />
            <br>
            <input type="submit" value="Login">
            <p>Need an account? <router-link to="/signup">Register here</router-link></p>
        </form>
    </div> 
  
</template>

<script>
import firebase from "firebase";
import HomeViewVue from './HomeView.vue';
import {ref} from 'vue';


export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value,password.value)
                .then(data => console.log(data))
                .catch(Error => alert(Error.message));
        }

        return{
            Login,
            email,
            password
        }
    }
    

}
</script>

<style>

    input {
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background: #e2e2e2;
    }

    button {
        margin: 10px;
        background: #6d6d6d;
        padding: 10px 15px;
        outline: none;
        border:none;
        border-radius: 5px;
        color: white;

    }


</style>