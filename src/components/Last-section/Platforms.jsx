import React from 'react'
import Platform from './Platform';

const Platforms = () => {
    const platforms = [
    {id: 1, url: "webflow.webp", detail: "Build a custom job board in Webflow that displays and syncs your jobs from Polymer."},
    {id: 2, url: "x_gray.webp", detail: "Post jobs to X for free and reach millions. Verified Orgs can also promote roles on their profiles."},
    {id: 3, url: "linkedin_gray.webp", detail: "Post jobs to your LinkedIn company page and appear across thousands of candidate searches."},
    {id: 4, url: "zapier_gray.webp", detail: "Build automations across 5,000+ apps triggered by hiring events in Polymer—no code required."},
    {id: 5, url: "slack_gray.webp", detail: "Automatically notify any Slack channel in your workspace when a new job application is received."},
    {id: 6, url: "google_gray.webp", detail: "Have jobs appear in Google Jobs so candidates can find them directly in Google's job search."},
    {id: 7, url: "discord_gray.webp", detail: "Send automatic messages to a selected Discord channel whenever a new job application comes in."},
    {id: 8, url: "wwr_gray.webp", detail: "With one click, publish your job to We Work Remotely's audience of 6M remote job seekers."},
    {id: 9, url: "whatjobs_gray.webp", detail: "Post your job to WhatJobs and reach candidates across their network of 500+ partner job boards."}
  ];

  function createPlatform(platforms) {
    return (
      <Platform 
        key={platforms.id}
        url={platforms.url}
        detail={platforms.detail}
      />
    )
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 px md:px-3 xl:px-40 '>
      {platforms.map(createPlatform)}
    </div>
  )
}

export default Platforms