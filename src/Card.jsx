import React from "react";

export default function Card({ user, handleRemove, id }) {
  const style =
    "w-64 h-[95%] bg-zinc-100 rounded-xl flex flex-col justify-center items-center";
  const profile = "flex justify-center items-center";
  const btn = "border-2 border-sky-500 rounded px-2 mt-2 ";

  return (
    <div className={style}>
      <div className={profile}>
        <img className="rounded-full w-32 h-32" src={user.image} alt="" />
      </div>
      <h1 className="text-center text-xl font-bold mt-2">{user.name}</h1>
      <h5 className="text-sm opacity-60">{user.email}</h5>
      <p className="text-justify px-3 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        recusandae molestiae sapiente, deserunt quasi totam.
      </p>
      <button className={btn} onClick={() => handleRemove(id)}>
        Remove <span>❌</span>
      </button>
    </div>
  );
}



























