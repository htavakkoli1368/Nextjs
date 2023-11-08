import React from 'react'
interface Props{
    params:{slug :string[]}
}
const Products = ({params:{slug}}:Props) => {
  return (
    <div>Products {slug}</div>
  )
}

export default Products