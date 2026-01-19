import { useState } from "react"

const Bar = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div>
      <button className="text-5xl lg:hidden flex cursor-pointer" onClick={handleClick}>
        {open? "x" : "="}
      </button>

      <div className="hidden lg:flex h-10 items-center rounded-sm shadow-md">
        <h1 className="h-7.5 pr-4 pl-4 ml-1 hover:bg-pink-50 rounded-sm cursor-pointer">Features</h1>
        <h1 className="h-7.5 px-4 hover:bg-pink-50 rounded-sm cursor-pointer">Pricing</h1>
        <h1 className="h-7.5 px-4 hover:bg-pink-50 mr-2 rounded-sm cursor-pointer">Blog</h1>
        <h1 className="text-white bg-black rounded-sm h-7.5 w-20 text-center px-4 cursor-pointer">Log in</h1>
        <h1 className="text-black bg-pink-100 rounded-sm h-7.5 w-24 text-center px-4 ml-2 mr-1 cursor-pointer">Sign Up</h1>
      </div>

      {open && (
        <div className="lg:hidden bg-white rounded-sm shadow-md flex-row absolute top-20 left-2 right-2 mt-3">
          <h1 className=" hover:bg-pink-50 rounded-sm cursor-pointer py-2  pl-2">Features</h1>
          <h1 className=" hover:bg-pink-50 rounded-sm cursor-pointer py-2 pl-2">Pricing</h1>
          <h1 className=" hover:bg-pink-50 mr-2 rounded-sm cursor-pointer py-2 pl-2">Blog</h1>
          <h1 className="text-white hover:bg-pink-50 cursor-pointer py-2 pl-2">
        <div className="bg-black rounded-sm w-20 text-center py-1 pl-1">
          Log In
        </div>
        </h1>
        <h1 className="cursor-pointer hover:bg-pink-50 py-2 text-center pl-2">
          <div className="text-black bg-pink-100 rounded-sm w-20 py-1">Sign Up</div>  
        </h1>        
      </div>
      )}
     
    </div>
  )
}

export default Bar