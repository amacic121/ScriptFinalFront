<template>
    <div>
       <b-navbar class="header" fixed="top" type="dark" variant="dark">
          <div class="container-fluid">
             <a class="navbar-brand" href="/">Task Manager</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                   <li class="nav-item active">
                   </li>
                   <li class="nav-item">
                      <a class="nav-link active"  href="/register">Register</a>
                   </li>
                </ul>
             </div>
          </div>
       </b-navbar>
       
       
       <h3>Sign In</h3>
       <label>Username</label>
       <input type="email" class="form-control form-control-lg" v-model = "username" />
       <label>Password</label>
       <input type="password" class="form-control form-control-lg" v-model = "password"/>
       <button type="submit" class="btn btn-dark btn-lg btn-block" @click="onLogin()">Sign In</button>
    </div>
 </template>
  
  <script>
  
  import { mapActions } from 'vuex';
  
  
  export default {
    name: 'LoginUser',


    data() {
      return {
          username: '',
          password: ''
      }
    },
  
    methods: {
        ...mapActions([
          'login'
        ]),
  
        onLogin() {

  
          this.login({username: this.username, password: this.password});
          this.$router.push({name: 'TaskLists'})
  
        }
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
    </style>
  