<template>
    <div class="container">
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
                   </li>
                </ul>
             </div>
          </div>
       </b-navbar>
       <p></p>
       <table class="table">
          <thead>
             <tr class="table-active">
                <th>Add Task</th>
                <th>type of task</th>
                <th>starting date</th>
                <th>due date</th>
                <th></th>
             </tr>
          </thead>
          <tbody>
            
             <tr>
                <td> <input type="text" placeholder="What task do you want to add?" v-model="Task.description"></td>
                <td>
                   <select name="typeOfTask" v-model="Task.typeOfTask">
                      <option>Regular Task</option>
                      <option>Urgent Task</option>
                      <option>Short Task</option>
                      <option>Long Task</option>
                      <option>Other</option>
                   </select>
                </td>
                <td> <input type="date" v-model="Task.startingDate"></td>
                <td> <input type="date"  v-model="Task.dueDate"></td>
                <td><input type="submit" class="btn btn-dark" value="ADD TASK" @click="addToMongo();reloadPage()"></td>
             </tr>
          </tbody>
       </table>
       <div>
          <h1>Tasks</h1>
             <table class="table">
                <thead>
                   <tr>
                      <th>Select</th>
                      <th>Task</th>
                      <th>Type of task</th>
                      <th>starting date</th>
                      <th>due date</th>
                   </tr>
                </thead>

               
                <tr v-for="task_list in listOfTasks" v-bind:key = "task_list.id">
                 
               
               <td><button @click = "delFromMongo(task_list.id);reloadPage()">Delete</button></td>

                <td>{{task_list.description}}</td>
                <p> </p>
                <td>{{task_list.typeOfTask}}</td>
                <p> </p>
                <td>{{task_list.startingDate}}</td>
                <p> </p>
                <td>{{task_list.dueDate}}</td>
                
                
                  
                <td> <input type="text" name="description" placeholder="Change descrption" v-model.lazy = "editedTask.description"></td>
                <td> <select name="typeOfTask" v-model.lazy = "editedTask.typeOfTask">
                <option>Regular Task</option>
                <option>Urgent Task</option>
                <option>Short Task</option>
                <option>Long Task</option>
                <option>Other</option>
                </select> </td>

              
               <td> <input type="date" name="startingDate" v-model.lazy = "editedTask.startingDate" ></td>
               <td> <input type="date" name="dueDate" v-model.lazy = "editedTask.dueDate" ></td>

            
                <td><button @click = "editOnMongo(task_list.id);reloadPage()">Edit</button></td>
                </tr>


      
             </table>
             
         </div>
      </div>
       
 </template>
   
   <script>
   /* eslint-disable */
  import axios from 'axios';
 
  
   export default {
     name: 'TaskLists',
     data(){
      return {
         Task : {description: '',typeOfTask: '',startingDate: '', dueDate: '' },
         editedTask : {description: '',typeOfTask: '',startingDate: '', dueDate: '' },
         listOfTasks : [],

      }
     },methods: {
      addToMongo()
      {
         let newTask = {
            description: this.Task.description,
            typeOfTask: this.Task.typeOfTask,
            startingDate: this.Task.startingDate,
            dueDate: this.Task.dueDate

         }
         console.log(newTask);
         axios.post('http://localhost:3000/tasks',newTask)
            .then((response) => {
               console.log(response);

            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      delFromMongo(id)
      {
         console.log(id)
         axios.delete('http://localhost:3000/tasks/'+id)
            .then(() => {
            
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      editOnMongo(id)
      {
         let updatedTask = {
            description: this.editedTask.description,
            typeOfTask: this.editedTask.typeOfTask,
            startingDate: this.editedTask.startingDate,
            dueDate: this.editedTask.dueDate

         }

         console.log(id)
         axios.put('http://localhost:3000/tasks/'+id, updatedTask)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      
      reloadPage(){
          window.location.reload();
        }
     },
     mounted(){ 
         axios.get('http://localhost:3000/tasks', this.listOfTasks)
         .then((response) => {
               console.log(response.data);
               this.listOfTasks = response.data;
         })
         .catch((error) =>{
               console.log(error);

         })

     },





     
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
   
      color: black;
      margin:auto;
    padding: 20px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
  }
     </style>
   