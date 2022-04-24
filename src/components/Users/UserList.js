import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './Userslist.module.css'

const UsersList = (props) => {

    return(
        <Card className={classes.users} >
        <ul>
            {props.users.map(user =>
                 <li key={user.id}>{user.name} is {user.age} years old! 
                  </li>)}
        </ul>
        </Card>
    )
};

export default UsersList;
