import { useState } from "react"
import Bar from "./Bar"

export const Navbar = () => {

  return (
    <div className="flex justify-between items-center h-12 px-0 lg:px-10"> 
      <div className="flex cursor-pointer">
        <img src="logo2.svg" className="w-10"></img>
        <h1 className="text-center flex text-2xl">Polymer</h1>
      </div>
      <Bar />
    </div>
  )
}


/* 
Ubah ke dropdown saat breakpoint md ke bawah

*/