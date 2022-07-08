import React from 'react'

const Pagenation = (setPage) => {
    const handlePagenation =(e)=>{
        setPage(e.target.value)
    }
  return (
    <div className='d-flex '>
    <p className='p-2 PointerClikCss'> > </p>
    <p className='p-2 PointerClikCss'> 1 </p>
    <p className='p-2 PointerClikCss'> 2 </p>
    <p className='p-2 PointerClikCss'> 3 </p>
    <p className='p-2 PointerClikCss'> 4 </p>
    <p className='p-2 PointerClikCss'> > </p>
  </div>
  )
}

export default Pagenation