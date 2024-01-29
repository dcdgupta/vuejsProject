<template>
    <h1> Koja</h1>
    <div v-for="koja in kojas" :key='koja.id' class="job">
      <router-link :to="{name: 'Kojadetails' , params: {id: koja.id}}">
        
        <h2> {{ koja.id }} {{ koja.firstName }} {{ koja.lastName }}</h2>
      </router-link>
  
    </div>
  </template>
  
  <script>
  import CustomerService from '../services/customerService'
  export default {
      data() {
          return {
              kojas: []
                                     
          }
      },
      methods: {

getCustomers() {
  CustomerService.getCustomers()
        .then (response => {this.kojas = response.data})
      
        .catch(err => console.log(err.message))
}

      },
      mounted() {
this.getCustomers()
      }
  
  }
  </script>
  
  <style>
  .job h2{
    background: #f4f4f4;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    max-width: 600px;
    cursor:pointer;
    color: #444;
  }
  .job h2:hover{
    background: #ddd;
  
  }
  .job a {
    text-decoration: none;
  }
  </style>../../services/customerService