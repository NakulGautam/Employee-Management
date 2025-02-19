import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask  ()  {
   const [userData,setUser] =  useContext(AuthContext)
 
    return ( 
        <div className='bg-secondary p-4 rounded-3 mt-3 h-75'>

            <div className='bg-danger mb-2 py-2 px-4 d-flex justify-content-between rounded-2'>
                <h2 className='px-2 bg-success'>Employee Name</h2>
                <h3 className='px-2 bg-success'>New Task</h3>
                <h5 className='px-2 bg-success'>Active Task</h5>
                <h5 className='px-2 bg-success'>Completed</h5>
                <h5 className='px-2 bg-success'>Failed</h5>
            </div>

            <div className='h-75 overflow-auto'>
            {userData.map(function(elem, idx){

            return <div key={idx} className='bg-danger mb-2 py-2 px-4 d-flex justify-content-between rounded-2'>
            <h2 className='px-2 bg-success'>{elem.firstName}</h2>
            <h3 className='px-2 bg-success'>{elem.taskNumbers.newTask}</h3>
            <h5 className='px-2 bg-success'>{elem.taskNumbers.active}</h5>
            <h5 className='px-2 bg-success'>{elem.taskNumbers.completed}</h5>
            <h5 className='px-2 bg-success'>{elem.taskNumbers.failed}</h5>
            </div>

             })}
            </div>

        
        </div>
     );
}

export default AllTask;