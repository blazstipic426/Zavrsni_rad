<template>
    <nav>
      <router-link to="/about">About</router-link> | 
      <button class="logout" @click="Logout">Logout</button>
    </nav>
  <div class="home">
    <h1>Welcome, Usera</h1>
 
 

    <div style="border-style: solid;">
  <table >
           <tr >
            <th >ID</th>
            <th >Datum i vrijeme</th>
            <th >Saksije</th>
            <th >Osobe</th>
            <th >Kamioni</th>
            <th >Auta</th>
            <th >Vatrogasni aparati</th>
            <th >Klupe</th>
            <th >Kisobrani</th>
           </tr >
           <tr v-for="(record) in msg['members']" :key="record.id" >
              <td >{{record[0]}}</td>
              <td >{{record[1]}}</td>
              <td >{{record[2]}}</td>
              <td >{{record[3]}}</td>
              <td >{{record[4]}}</td>
              <td >{{record[5]}}</td>
              <td >{{record[6]}}</td>
              <td >{{record[7]}}</td>
              <td >{{record[8]}}</td>
              
            
           </tr>
          </table>
</div>

    <br>
    
  </div>
  
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { ref, onBeforeMount } from 'vue';
import firebase from "firebase";
import axios from 'axios';






export default {
 
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

   
  },
  //dovdje je ubacen kod
  setup (){
 
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch(err => alert(err.message));
    }

    return {
      name,
      Logout, 
    };
    
  },
   name: "App",
        data() {
          return{
            greet: 'Hello',
            msg: [],
          };
        },
   methods : {
          getReponse(){
            const path = 'http://127.0.0.1:5000/';
            axios.get(path)
            .then ((res) =>{
              console.log(res.data);
              this.msg = res.data;
            })
            .catch ((err) => {
              console.error(err);
            })
          },
        },
        created(){
          this.getReponse();
        },
        
}
</script>
<style>
    tr{border-style: solid;}
    td{border-style: solid; size: 0px;}
    
    
    </style>





