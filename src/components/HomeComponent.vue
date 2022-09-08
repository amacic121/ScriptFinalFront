<template>
    <div class="home">
       <b-navbar class="header" fixed="top" type="dark" variant="dark">
          <div class="container-fluid">
             <a class="navbar-brand" href="/">Task Manager</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                   <li class="nav-item active">
                      <a class="nav-link active" aria-current="page" href="/login">Login</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link active"  href="/register">Register</a>
                   </li>
                </ul>
             </div>
          </div>
       </b-navbar>
      
       
       <p></p>
        <b-list-group>
      
        <b-list-group-item>Task description 1</b-list-group-item>
        <b-list-group-item>Task description 2</b-list-group-item>
        <b-list-group-item>Task description 3</b-list-group-item>
        <b-list-group-item>Task description 4</b-list-group-item>
        <b-list-group-item>Task description 5</b-list-group-item>
       </b-list-group>
    </div>
  </template>
   
   <script>
   import { mapActions } from 'vuex';
  
  
   export default {
     name: 'HomeComponent',


     data() {
      return {
        Task : {description: '',typeOfTask: '',startingDate: '', dueDate: '' },
        listOfTasks : []
      }
    },
  
    methods: {
        ...mapActions([
          'socket_List'
        ]),

     }   
     
   }
   </script>
   
   <style scoped>
     .pagination {
       display: flex;
       justify-content: center;
     }
     h3 {
       margin: 40px 0 0;
     }
     
     ul {
       list-style-type: none;
       padding: 0;
     }
     
     li {
       display: inline-block;
       margin: 0 10px;
     }
     
     a {
       color: #42b983;
     }
     button {
   
      color: green;
    padding: 60px 120px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 36px;
  }
     </style>
   