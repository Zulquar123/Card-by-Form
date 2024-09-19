import React, { useState } from "react";
import Card from "./Card";

export default function Cards() {
  const style =
    "w-[80%] h-3/5 bg-sky-500 flex items-center justify-center rounded-xl mx-10 gap-2";
  const data = [
    {
      name: "Elon Musk",
      image: "https://i.redd.it/tm7ced4yniib1.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis necessit ullam vero laboriosam deserunt.",
      friendship: false,
    },
    {
      name: "Bill Gates",
      image:
        "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis necessit ullam vero laboriosam deserunt.",
      friendship: false,
    },
    {
      name: "Lary Page",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis necessit ullam vero laboriosam deserunt.",
      friendship: false,
    },
    {
      name: "Jeff Bezoz",
      image:
        "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis necessit ullam vero laboriosam deserunt.",
      friendship: false,
    },
  ];
  const [rawData, setData] = useState(data);
  return (
    <div className={style}>
      {rawData.map((item, index) => (
        <Card values={item} index={index} key={index} />
      ))}
    </div>
  );
}
