<template>
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
           <td> <input type="text" name="description" placeholder="What task do you want to add?" required></td>
               
             <td> <select name="typeOfTask" required>
 
                 <option>Regular Task</option>
                 <option>Urgent Task</option>
                 <option>Short Task</option>
                 <option>Long Task</option>
                 <option>Other</option>
 
               </select></td>
             <td> <input type="date" name="startingDate" required></td>
             <td> <input type="date" name="dueDate" required></td>
             <td><input type="submit" class="btn btn-dark" id="add" value="ADD TASK"></td>
           </tr>
         </tbody>
       </table>
 </template>
 
 <script>
 export default {
   name: 'TableTasks',
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
 