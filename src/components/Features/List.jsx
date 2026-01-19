import React from 'react'

const List = (props) => {
  return (
    <div className='flex flex-row gap-2 ml-2'>
      <img className='h-6' src='checkbox.svg'></img>
      <li>{props.list}</li>
    </div>
  )
}

export default List