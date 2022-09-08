<template>
    <b-navbar class="header" fixed="top" type="dark" variant="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Task Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Register</a>
        </li>
      </ul>
    </div>
  </div>
</b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .pagination {
    display: flex;
    justify-content: center;
  }
  h3 {
    margin: 30px 0 0;
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
