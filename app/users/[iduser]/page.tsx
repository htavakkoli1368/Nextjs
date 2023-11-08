import React from 'react'

interface props {
    params:{iduser:number}
}
const UserDetail = ({params:{iduser}}:props) => {
  return (
    <div>pagedetail id is {iduser } </div>
  )
}

export default UserDetail