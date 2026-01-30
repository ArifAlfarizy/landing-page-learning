import React from "react";

const Platform = (props) => {
  return (
    <div className="flex flex-col gap-4 mt-15">
      <img className="rounded-sm" src={props.url}></img>
      <p>{props.detail}</p>
      <button className="bg-black  text-white rounded-sm text-start px-2 py-0.5 w-25 h-8 cursor-pointer">
        Learn more
      </button>
    </div>
  );
};

export default Platform;
