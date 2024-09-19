import React from "react";

export default function Card({ values, index }) {
  const { name, image, desc } = values;
  const style =
    "w-64 h-[95%] bg-zinc-100 rounded-xl flex flex-col justify-center items-center";
  const profile = " flex justify-center items-center";
  return (
    <div className={style}>
      <div className={profile}>
        <img className=" rounded-full w-32 h-32" src={image} alt="" />
      </div>
      <h1 className="text-center text-xl font-bold mt-2">{name}</h1>
      <p className="text-justify px-3 mt-1">{desc}</p>
      <button className="border-2 border-sky-500 rounded px-2 mt-2 ">
        Remove <span>❌</span>
      </button>
    </div>
  );
}
