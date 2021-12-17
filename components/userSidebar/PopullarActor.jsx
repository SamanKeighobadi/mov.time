import React from "react";

export default function PopullarActor() {
  const actors = [
    {
      id: 1,
      name: "Name",
      natios: "American",
      follower: 10000,
      src: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 2,
      name: "Name",
      natios: "Spain",
      follower: 499999,
      src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 3,
      name: "Name",
      natios: "Colombia",
      follower: 233042,
      src: "https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  return (
    <div className="mt-3">
      <h1 className="text-gray-300 pb-4 font-semibold">Popullar Actor</h1>
     {actors.map((actor,index) => (
      <div className="text-gray-400 flex justify-between">
        <div className="flex py-3">
          <img src={actor.src} className="rounded-full" width={40} height={40} />
          <div className="pl-3">
            <h6>{actor.name}</h6>
            <p className="text-xs"> {actor.natios} </p>
          </div>
        </div>
        <div>
          <p className=""> {actor.follower}</p>
          <p className="text-xs">followers</p>
        </div>
      </div>
     ))}
    </div>
  );
}
