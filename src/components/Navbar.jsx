import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const naviagte = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => naviagte(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => naviagte(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        <div className=" flex items-center gap-4 ">
          <Link
            to="https://www.spotify.com/in-en/premium/"
            target="_blank"
            className="bg-white text-black hover:bg-black hover:text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
          >
            Explore Premium
          </Link>
          <Link
            to="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_IN"
            target="_blank"
            className="bg-black hover:bg-white hover:text-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
          >
            Install App
          </Link>
          <p className="bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "bg-white text-black " : "bg-black text-white"
            }  px-4 py-1 rounded-2xl cursor-pointer`
          }
        >
          All
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            `${
              isActive ? "bg-white text-black " : "bg-black text-white"
            }  px-4 py-1 rounded-2xl cursor-pointer`
          }
        >
          Music
        </NavLink>

        <NavLink
          to="/podcasts"
          className={({ isActive }) =>
            `${
              isActive ? "bg-white text-black " : "bg-black text-white"
            }  px-4 py-1 rounded-2xl cursor-pointer`
          }
        >
          Podcasts
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
