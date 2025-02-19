import React from 'react';
import './AcceptTask.css'


function AcceptTask({data}) {
  
    return ( 
        
        <div className="Acceptmain mt-2 rounded-3 p-3 flex-shrink-0">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="bg-primary px-2 py-1 rounded-3 text-white fs-6">
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
        <div className='d-flex justify-content-between mt-3'>
            <button className='btn rounded-3 py-1 px-2 fs-6 border border-none'>Mark as Completed</button>
            <button className='btn rounded-3 py-1 px-2 fs-6 border border-none'>Mark as Failed</button>
        </div>
      </div>

     );
}

export default AcceptTask;