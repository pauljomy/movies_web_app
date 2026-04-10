import React from "react";
import logo from "@/assets/logo.svg";
import navHome from "@/assets/icon-nav-home.svg";
import avatar from "@/assets/image-avatar.png";
import movies from "@/assets/icon-nav-movies.svg";
import tvSeries from "@/assets/icon-nav-tv-series.svg";
import bookMark from "@/assets/icon-nav-bookmark.svg";

const HomePage = () => {
  console.log(logo);
  return (
    <div>
      <div className="bg-div-bg px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-6" />
        <div className="flex gap-6 items-center">
          <img src={navHome} alt="nav-home" className="size-5" />
          <img src={movies} alt="movies" className="size-5" />
          <img src={tvSeries} alt="tv-series" className="size-5" />
          <img src={bookMark} alt="book-mark" className="size-5" />
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="w-6 border border-white rounded-full"
        />
      </div>
    </div>
  );
};

export default HomePage;
