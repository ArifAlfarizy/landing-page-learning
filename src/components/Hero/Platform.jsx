import React from 'react'
import PlatformImg from './Images/PlatformImg'

const Platform = () => {
  return (
    <div className='flex flex-col text-center mt-20'>
      <p className='mb-5'>The hiring platform trusted by modern, high-growth teams</p>
      <div className='flex flex-wrap flex-row sm:flex-wrap md:flex-wrap justify-center'>
        <PlatformImg url="piratewires.svg" />
        <PlatformImg url="tixel.svg" />
        <PlatformImg url="campfire.svg" />
        <PlatformImg url="filebase.svg" />
        <PlatformImg url="eeetwell.svg" />
        <PlatformImg url="leland.svg" />
        <PlatformImg url="makelog.svg" />
        <PlatformImg url="helium.svg" />
        <PlatformImg url="cala.svg" />
      </div>
    </div>
  )
}

export default Platform