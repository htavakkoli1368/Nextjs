import React from 'react'
interface User{
    id : number;
    name:string;
    email:string
  }
const UserTable = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
    {next:{revalidate:10}});
    const userList:User[] = await res.json();
  return (
    <table className='table table-bordered'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {userList.map(user=><tr key={user.id}>
       <td>{user.name}</td>
       <td>{user.email}</td>
       </tr>
     )}
    </tbody>       
  </table>
  )
}

export default UserTable