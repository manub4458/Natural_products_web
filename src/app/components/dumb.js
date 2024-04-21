"use client"
import { user } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const Dumb = () => {
    const [users, setUsers] = useState([]);
    console.log("Users",users);
    useEffect(()=>{
         async function fetchUsers(){
const data = await fetch("https://dummyjson.com/users");
setUsers(await data.json())
        }
        fetchUsers()
    },[])
  return (
    <div>Dumb</div>
  )
}

export default Dumb