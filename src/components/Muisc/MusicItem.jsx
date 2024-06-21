import React from "react";
import { usePlayer } from "../../context/PlayerContext";

const MusicItem = ({ name, desc, image, id }) => {
  const { playWithId } = usePlayer();
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="h-40 w-52 rounded-full" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default MusicItem;
