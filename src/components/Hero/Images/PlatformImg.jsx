import React from 'react'

const PlatformImg = (props) => {
  return (
    <div className='flex'>
      <img className='h-6 m-6 opacity-65' src={props.url}></img>
    </div>
  )
}

export default PlatformImg