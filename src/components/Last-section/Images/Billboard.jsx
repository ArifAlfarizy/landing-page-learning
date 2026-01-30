import React from 'react'
import BillFeature from './BillFeature'

const Billboard = () => {
  return (
    <div className='flex flex-col items-center rounded-sm text-center py-15 px-5 xl:py-28 xl:px-0 bg-black'>
      <h1 className='text-transparent bg-linear-to-r from-pink-200 to-orange-100 bg-clip-text text-3xl sm:text-4xl md:text-4.5xl lg:text-5xl font-semibold mb-5'>Tailor your experience</h1>
      <p className='text-white opacity-70 px-2 sm:px-2 md:px-20 lg:px-80 xl:px-120 mb-15'>Our customizations go deep. Polymer is applicant tracking software that can flex to fit your needs perfectly.</p>
      <img className='w-300' src='billboard-dark.webp'></img>
      <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-10 px-0 md:px-0 xl:px-36 lg:px-0 mt-15'>
        <BillFeature 
        url="moon-icon.svg"
        title="Dark mode enabled"
        detail="With support for both light and dark themes, Polymer fits in perfectly with the rest of your productivity suite.  "/>
        <BillFeature 
        url="moon-icon.svg"
        title="Jobs API included"
        detail="You can either use our ready-made job board or build your own front-end using our developer API."
        />
      </div>
    </div>
  )
}

export default Billboard
