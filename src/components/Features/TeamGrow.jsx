import React from 'react'
import Grow from './Grow'


const TeamGrow = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold mb-5'>Everything you need to grow your team</h1>
      <div className='flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row gap-4 mt-5'>
        <Grow url="profile-icon.svg" name="Company job board" detail="Create a branded company job board as a centralized place to display all the open positions at your company." />
        <Grow url="profile-icon.svg" name="Candidate management" detail="As they apply, new candidates automatically show up in the Polymer hiring dashboard for efficient review and management." />
        <Grow url="profile-icon.svg" name="Team collaboration" detail="Invite your entire team to participate in the hiring process. User roles and notifications keep everyone focused and aligned."/>
      </div>
      
    </div>
  )
}

export default TeamGrow

