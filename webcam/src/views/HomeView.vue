<template>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/userlist">User list</router-link> |
      <button class="logout" @click="Logout">Logout</button>
    </nav>
  <div class="home">
    <h1>Welcome, User</h1>
    

    <br>
    
  </div>
  
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, onBeforeMount } from 'vue';
import firebase from "firebase";

export default {
  setup (){
    const name = ref("");

    onBeforeMount(() =>{
      const user = firebase.auth().currentUser;
      if(user){
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch(err => alert(err.message));
    }

    return {
      name,
      Logout
    }
  }
  

}
</script>
