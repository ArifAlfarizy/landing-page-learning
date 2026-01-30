import React from 'react'
import List from './List'

const Benefit = (props) => {

  return (
    <div className='flex flex-col sm:flex-col lg:flex-row mt-30 gap-20 sm:gap-10'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold mb-5'>{props.title}</h1>
        <p className='2xl:pr-50'>{props.detail}</p>
        <ul style={{display: props.display}} className='flex flex-col gap-3 mt-20 sm:mt-10'>
         <List list="Flexible applicant tracking" />
         <List list="Customizable workflows" />
         <List list="Rich candidate profiles" />
         <List list="Built-in candidate messaging" />
         <List list="Bulk messaging" />
         <List list="Message templates" />
         <List list="Shared notes & documentation"/>
        </ul>
      </div>
      <img className='w-170 rounded-sm shadow-md' src={props.url}></img>
    </div>
  )
}

export default Benefit