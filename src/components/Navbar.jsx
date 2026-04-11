import React from "react";
import logo from "@/assets/logo.svg";
import navHome from "@/assets/icon-nav-home.svg";
import avatar from "@/assets/image-avatar.png";
import movies from "@/assets/icon-nav-movies.svg";
import tvSeries from "@/assets/icon-nav-tv-series.svg";
import bookMark from "@/assets/icon-nav-bookmark.svg";
import { ChevronRight } from "lucide-react";
import SideBarItem from "./SideBarItem";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDesktop,
  setIsDesktop,
}) => {
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  handleScreenSize();

  return (
    <div className="sm:p-6 lg:p-0">
      <div
        className={`bg-div-bg text-gray-400 px-6 py-4 flex max-lg:justify-between max-lg:items-center sm:rounded-md lg:flex-col  lg:min-h-screen lg:px-2 lg:gap-12 ${isSidebarOpen ? "w-60" : "w-14"} border-r border-gray-700  transition-[width] duration-300 ease-in-out`}
      >
        <SideBarItem
          icon={logo}
          label="Movie Database"
          alt="movie-database"
          isSidebarOpen={isSidebarOpen}
          className={`font-bold text-gray-100 text-[18px]`}
          isDesktop={isDesktop}
        />
        <div className="flex gap-4 max-lg:items-center md:gap-6 lg:gap-4 lg:flex-col ">
          <SideBarItem
            icon={navHome}
            label="Home"
            alt="nav-home"
            isSidebarOpen={isSidebarOpen}
            isDesktop={isDesktop}
          />
          <SideBarItem
            icon={movies}
            label="Movies"
            alt="movies"
            isSidebarOpen={isSidebarOpen}
            isDesktop={isDesktop}
          />
          <SideBarItem
            icon={tvSeries}
            label="TV Series"
            alt="tv-series"
            isSidebarOpen={isSidebarOpen}
            isDesktop={isDesktop}
          />
          <SideBarItem
            icon={bookMark}
            label="Bookmark"
            alt="book-mark"
            isSidebarOpen={isSidebarOpen}
            isDesktop={isDesktop}
          />
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="w-6 md:w-8 border border-white rounded-full"
        />
        {isDesktop && !isSidebarOpen ? (
          <ChevronRight
            onClick={handleSidebarOpen}
            size={24}
            className="h-7  stroke-4  hover:text-white"
          />
        ) : (
          <div className="flex gap-5 items-center text-xl ">
            <ChevronRight
              onClick={handleSidebarOpen}
              size={24}
              className="h-7 stroke-4  hover:text-white rotate-180 "
            />
            <span>Hide</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
