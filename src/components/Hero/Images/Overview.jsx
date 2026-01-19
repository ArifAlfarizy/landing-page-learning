import React from 'react'

const Overview = (props) => {
  return (
    <div className='border-30 sm:border-50 md:border-50 lg:border-55 border-pink-100 rounded-3xl mt-10 sm:mx-5 md:xm-5 lg:xm-5'> 
      <img className='w-300 sm:w-300 md:w-300' src={props.url}></img>
    </div>
  )
}

export default Overview
