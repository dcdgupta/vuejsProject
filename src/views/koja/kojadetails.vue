<template>
    <div v-if="koja">
    <h1> {{ koja.name }}</h1>
    <p> The id is {{ id }}</p>
    <p> The email is {{ koja.email }}</p>
    <p> First Name {{ koja.firstName }}</p>
    <p>Last Name {{ koja.lastName }}</p>
    <p>Address {{ koja.address1 }}</p>
    <p> status {{ koja.postCode }}</p>
  
    </div>
  <div v-else>
    <p> Loading Job details</p>
  
  </div>
  </template>
  
  <script>
  import CustomerdetServices from '../services/customerdetServices'
  export default {
    props: ['id'],
    data() {
      return {
        koja: null
      }
    },
    methods: {

getCustomersdet() {
  CustomerdetServices.getCustomersdet(this.id)
        .then (response => {this.koja = response.data})
        .catch(err => console.log(err.message))
        console.log(this.id)
      }
      },
     
    mounted() {
      this.getCustomersdet()
      }
  }
  </script>
  
  <style>
  
  </style>