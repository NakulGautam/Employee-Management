import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';
import './employeeDash.css'

const EmployeeDashboard = (props) =>{
    
    return(
        
        <div className='eMain p-4'>
          
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard