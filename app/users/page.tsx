import React from 'react'
interface User{
  id : number;
  name:string;
}
const userspage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  {next:{revalidate:10}});
  const userList:User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
         {userList.map(user=>
          <li key={user.id}>{user.name}</li>
         )}
      </ul>
    </>
  )
}

export default userspage;