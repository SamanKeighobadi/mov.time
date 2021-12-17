import React from "react";

export default function UserPopullarMove() {
  const movies = [
    {
      id: 1,
      name: "Name",
      src:'https://images.pathe-thuis.nl/28225_1920x1080.jpg',
      desc: "Ad non mollit commodo ex pariatur amet nulla aliqua anim ea aute non eiusmod deserunt. Enim voluptate sit cupidatat ullamco nisi. Ex dolore aute non aute ex qui commodo labore proident labore sit aliqua proident reprehenderit. Sunt proident veniam occaecat est ad voluptate duis do consectetur reprehenderit do. Eiusmod adipisicing dolore elit deserunt est veniam do exercitation minim deserunt dolore commodo fugiat fugiat. ",
    },
    {
      id: 2,
      name: "Name",
      src:"https://images.pathe-thuis.nl/28225_1920x1080.jpg",
      desc: "Ad non mollit commodo ex pariatur amet nulla aliqua anim ea aute non eiusmod deserunt. Enim voluptate sit cupidatat ullamco nisi. Ex dolore aute non aute ex qui commodo labore proident labore sit aliqua proident reprehenderit. Sunt proident veniam occaecat est ad voluptate duis do consectetur reprehenderit do. Eiusmod adipisicing dolore elit deserunt est veniam do exercitation minim deserunt dolore commodo fugiat fugiat. ",
    },
  ];

  return (
    <div className="py-2">
      <h1 className="text-gray-300 font-semibold">Popullar Move</h1>
      {movies.map((movie, index) => (
        <div className="bg-gray-700 my-3 rounded-lg grid grid-cols-2 " key={index}>
          <img src={movie.src}  className="rounded-lg" />
          <div className="h-16  overflow-y-hidden px-2 py-3">
            <h4 className="text-gray-300">{movie.name}</h4>
            <p className="text-gray-400 text-xs">{movie.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
