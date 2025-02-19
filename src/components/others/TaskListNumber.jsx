import React from 'react';


const TaskListNumbers = ({data}) =>{

    return(
        
        <div className='d-flex justify-conent-between gap-3 w-100 mt-4'>

            <div className=' w-50 bg-danger py-3 px-5 w-75 rounded-3 text-white'>
                <h2 className='fs-3'>{data.taskNumbers.newTask}</h2>
                <h2 className='fs-4'>New Task</h2>
            </div>
            

            <div className=' w-50 bg-primary py-3 px-5 w-75 rounded-3 text-white'>
                <h2 className='fs-3'>{data.taskNumbers.active}</h2>
                <h2 className='fs-4'>Accepted Task</h2>
            </div>

            <div className=' w-50 bg-success py-3 px-5 w-75 rounded-3 text-white'>
                <h2 className='fs-3'>{data.taskNumbers.completed}</h2>
                <h2 className='fs-4'>completed Task</h2>
            </div>

            <div className=' w-50 bg-warning py-3 px-5 w-75 rounded-3 text-white'>
                <h2 className='fs-3'>{data.taskNumbers.failed}</h2>
                <h2 className='fs-4'>Failed Task</h2>
            </div>

        </div>

        
    )

}

export default TaskListNumbers;