import React from 'react';




const Header = (props) => {
   
    
 
    const logOutUser = (event) => {


        event.preventDefault(); 
       
        localStorage.setItem('loggedInUser', '');
        
        props.changeUser('')
      
        
       
       
      };
      

    return(
        <div id='tasklist' className='d-flex justify-content-between align-items-end'>
            <h1 className='fs-3 text-black'>Hello
                <br />
                 <span className='fs-2 text-black'>{props.data?.firstName || "Admin"}😴</span>
            </h1>
            <button onClick={logOutUser} className='bg-danger text-white fw-bold px-4 py-2 rounded-3 border border-danger' type="button">Log Out</button>
        </div>
    )
}

export default Header