import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import './TaskList.css'


function TaskList({data}) {

  return (
    <>
      <style>
        {`
          .no-scrollbar {
            overflow: auto;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="taskList no-scrollbar">

      

        {data.tasks.map((elem, idx)=>{

          if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.newTask){
            return <NewTask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
          }

        
        
        })}


      </div>
    </>
  );
}

export default TaskList;
