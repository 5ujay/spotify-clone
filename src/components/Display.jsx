import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import Music from "./Muisc/Music";
import Podcasts from "./Podcasts";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation(); // Corrected typo: useLocation instead of loaction
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : "#121212"; // Handle default case

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [bgColor, isAlbum]); // Added dependencies to useEffect

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/music" element={<Music />} />
        <Route path="podcasts" element={<Podcasts />} />
      </Routes>
    </div>
  );
};

export default Display;
