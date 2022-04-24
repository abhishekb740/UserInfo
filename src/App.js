import React, { useState } from "react";
// import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

function App() {
  const [ usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        {name: uName, age: uAge, id: Math.random().toString() },
        ...prevUsersList
      ];
    });
  }
//   let defaultContent = 
//   <p>
//  Please enter your Input above!
//   </p>
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {/* {usersList.length===0 ? defaultContent : <UsersList users={usersList} /> } */}
      <UsersList users={usersList} />
    </div>
  );
}
export default App;
