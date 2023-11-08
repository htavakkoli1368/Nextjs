import React from 'react'

interface props {
    params:{iduser:number,id:number}
}
const Photo = ({params:{iduser,id}}:props) => {
  return (
    <div>pagedetail id is {iduser }{id} </div>
  )
}

export default Photo