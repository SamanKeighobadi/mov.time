import React from "react";

export default function PopullarMovie() {
  const movies = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/7b/7a/82/7b7a82d6619cc5f955dd190dcf9665f2.jpg",
    },
    {
      id: 2,
      src: "https://assets.fontsinuse.com/static/use-media-items/139/138571/full-1038x1552/609baabc/Screen%20Shot%202021-05-06%20at%206-33-22%20PM.png",
    },
    {
      id: 3,
      src: "https://www.filmjabber.com/movie-poster-thumbs/bios-movie-poster-6511.jpg",
    },
    {
      id: 4,
      src: "https://media.comicbook.com/2021/08/venom-let-there-be-carnage-new-poster-1-1279327.jpeg?auto=webp&width=720&height=900&crop=720:900,smart",
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl pb-3 text-gray-300 font-semibold">Popullar Movie</h1>
      <div className="grid grid-cols-4 gap-2">
        {movies.map((movie, index) => (
          <div key={index}>
            <img src={movie.src} className="rounded-lg h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
