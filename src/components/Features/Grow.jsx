import React from "react";

const Grow = (props) => {
  return (
    <div className="flex flex-col rounded-sm gap-4 bg-amber-50 p-8">
      <img className="w-15 p-3 rounded-sm bg-white" src={props.url}></img>
      <h2 className="font-bold">{props.name}</h2>
      <p className="h-28 md:h-40 ">{props.detail}</p>
      <button className="bg-black  text-white rounded-sm text-start px-2 py-0.5 w-25 h-8 cursor-pointer">Learn more</button>
    </div>
  );
};

export default Grow;
