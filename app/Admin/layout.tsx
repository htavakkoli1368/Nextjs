import React, { ReactNode } from 'react'

interface Props{
    children : ReactNode
}
const pageLayout = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-200 p-5'>my panel</aside>
        <div className='bg-red-200 p-5'>{children}</div>
    </div>
  )
}

export default pageLayout