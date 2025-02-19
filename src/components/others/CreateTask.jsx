import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  

   const submitHandler = (e) =>{
       e.preventDefault()

       const task ={taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false}
         
       
      const data = userData
     
      
      data.forEach(function(elem){
        if(assignTo == elem.firstName){
           elem.tasks.push(task)
           console.log(elem.employees);
        }
      })
      setUserData(data)
      console.log(data)
    

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')

   }
 
    return ( 
        <div className="p-4 bg-secondary pt-1 rounded-4 mt-3">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}
           className="d-flex flex-wrap w-100 justify-content-between align-items-start mt-3">

            <div className="w-50">
            <div>
              <h3 className="fs-4 mb-1">
                  Task Title</h3>
            
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
             className="fs-4 py-1 px-2 w-75 rounded-2 outline-none bg-transparent border border-black" type="text" placeholder="Make a UI Design" /></div>
            <div>
             
             <h3 className="fs-4 mb-1">
                  Date</h3>
             <input
             value={taskDate}
             onChange={(e)=>{
               setTaskDate(e.target.value)
             }}
              className="fs-4 py-1 px-2 w-75 rounded-2 outline-none bg-transparent border border-black" type="date" name="" id="" />
           </div>
           <div>
             <h3 className="fs-4 mb-1">
                  Assign To</h3>
             <input
             value={assignTo}
             onChange={(e)=>{
               setAssignTo(e.target.value)
             }}
              className="fs-4 py-1 px-2 w-75 rounded-2 outline-none bg-transparent border border-black" type="text" name="" id="" placeholder="Employee Name" />
           </div>
           <div>
             <h3 className="fs-4 mb-1">
                  Category</h3>
             <input
             value={category}
             onChange={(e)=>{
               setCategory(e.target.value)
             }}
              className="fs-4 py-1 px-2 w-75 rounded-2 outline-none bg-transparent border border-black"  type="text" name="" id="" placeholder="Design, Dev, etc" />
           </div>
            </div>

            
            <div className="w-50 d-flex flex-column align-items-start">
              <h3 className="fs-4 mb-1">Description</h3>
              <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
               className="w-100 h-50 fs-4 py-2 px-4 rounded-3 outline-none bg-transparent border border-black" name="" id=""></textarea>
              <button className="bg-success py-3 px-5 rounded-3 mt-4 w-100 text-white">Create Task</button>
            </div>
           
           
          </form>
        </div>
     );
}

export default CreateTask;