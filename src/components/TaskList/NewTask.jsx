import React from 'react';
import './NewTask.css'


function NewTask({data}) {
    return (

        <div className="Ntaskmain mt-2 w-25 bg-success rounded-3 p-3 flex-shrink-0">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="category bg-danger  py-1 px-2 rounded-3 text-white fs-6">
              {data.category}
            </h4>
            <h5 className="text-white fs-6">{data.taskDate}</h5>
          </div>
          <h4 className="mt-3 text-white fw-bold fs-4">
            {data.taskTitle}
          </h4>
          <p className="text-white fs-6 mt-2">
            {data.taskDescription}
          </p>
          <div className='mt-2'>
               <button className='btn'>Accept Task</button>
          </div>
        </div>
     );
}

export default NewTask;