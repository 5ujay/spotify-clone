import React from "react";
import Navbar from "../Navbar";
import MusicItem from "./MusicItem";
import { TopArtists } from "../../assets/assets";

const Music = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="my-5 font-bold text-2xl">Top Artists</h1>
        <div className="flex overflow-auto">
          {TopArtists.map((item, index) => (
            <MusicItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Music;
