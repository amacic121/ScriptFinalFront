<template>
    <div>
      <b-navbar class="header" fixed="top" type="dark" variant="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Task Manager</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link active" aria-current="page" href="/login">Login</a>
              </li>
              <li class="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </b-navbar>
      <p></p>
      <h3>Sign In</h3>
      <label>Username</label>
      <input type="username" class="form-control form-control-lg" v-model = "username"/>
      <label>Name</label>
      <input type="name" class="form-control form-control-lg" v-model = "name" />
      <label>Email</label>
      <input type="email" class="form-control form-control-lg" v-model = "email"/>
      <label>Password</label>
      <input type="password" class="form-control form-control-lg" v-model = "password"/>
      <label>Phone Number</label>
      <input type="phoneNumber" class="form-control form-control-lg" v-model = "phoneNumber" />

      <button type="submit" class="btn btn-dark btn-lg btn-block" @click="submitLogin()">Sign In</button>
    </div>
  </template>
    
  <script>
  
  import { mapActions } from 'vuex';
  
  
  export default {
    name: 'RegisterView',
  
    methods: {
      ...mapActions([
        'register'
      ]),
  
  
      submitLogin() {
        this.register({username: this.username, name:this.name, email: this.email, password: this.password, phoneNumber: this.phoneNumber });
        this.$router.push({name: 'TaskLists'})
      }
  
  
    },
  
  
    data() {
        return {
          username: '',
          name: '',
          email: '',
          password: '',
          phoneNumber: ''
        }
      },
  
  
  
  
    //     onSubmit(e) {
    //       e.preventDefault();
  
    //       this.register(this.form);
    //     }
    //   }
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
    