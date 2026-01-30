import React from 'react'

const Overview = (props) => {
  return (
    <div className='flex justify-center p-10 sm:p-10 lg:py-15 lg:px-15 bg-linear-to-r from-pink-200 to-orange-100 rounded-3xl mt-10 sm:mx-5 md:xm-5 lg:xm-5'> 
      <img className='w-300 sm:w-300 md:w-300 lg:w-400 2xl:w-500' src={props.url}></img>
    </div>
  )
}

export default Overview

// border-30 sm:border-50 md:border-50 lg:border-55 border-pink-100