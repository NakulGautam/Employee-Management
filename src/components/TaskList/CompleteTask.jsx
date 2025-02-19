import React from 'react';
import './CompleteTask.css'

function CompleteTask({data}) {
    return ( 

        <div className="Completemain mt-2 bg-primary rounded-3 p-3 flex-shrink-0">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="bg-danger px-1 py-1 rounded-3 text-white fs-6">
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
        <div className='mt-2 '>
                <button className='w-100 border border-none rounded-3'>Complete</button>
        </div>
      </div>

     );
}

export default CompleteTask;