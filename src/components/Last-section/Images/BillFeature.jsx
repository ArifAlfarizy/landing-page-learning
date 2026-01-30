import React from 'react'

const BillFeature = (props) => {
  return (
    <div className='flex flex-row gap-5'>
      <div className=''>
        <img src={props.url} className='absolute rounded-sm h-16 p-4 bg-gray-700'></img>
      </div>
      <div className='flex flex-col text-start gap-2 ml-19'>
        <h2 className='text-white font-semibold'>{props.title}</h2>
        <p className='text-white opacity-80'>{props.detail}</p>
      </div>
    </div>
  )
}

export default BillFeature