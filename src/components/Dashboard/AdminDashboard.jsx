import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard(props) {
  return (
    <>

    <style>
{
      `
      input::placeholder{
         color:white;
      }
         input{
         color:A8ABA6;
      }
      h3{
      color:#2E312B;
      }
      `
}
    </style>

      <div className="vh-100 w-100 p-4">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask />
      </div>
    </>
  );
}

export default AdminDashboard;
