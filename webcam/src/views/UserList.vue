<template>
<div id="app">
  <label>Name</label>
  <input type="text" v-model="name" />
  <button>Add</button>


</div>
</template>
<script>
import firebase from "firebase";
import { ref,onBeforeMount } from 'vue';






export default {
setup () {
  const name =ref("");

  onBeforeMount(() => {
    const user =firebase.auth().currentUser;
    if(user){
      name.value=user.email.split('@')[0];
    }
  });
  return{
    name
  }
}
  

}
</script>


<style>
button {
  background-color: transparent;
  border: 2px solid black;
}





</style>