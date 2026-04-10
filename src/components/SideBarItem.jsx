import React from "react";

const SideBarItem = ({ icon, label, alt, isSidebarOpen, isDesktop }) => {
  return (
    <div
      className={`flex ${isSidebarOpen ? "gap-5" : "justify-center"} items-center  h-5 hover:bg-gray-800 py-5 px-2 hover:rounded-sm hover:brightness-150 cursor-pointer`}
    >
      <img src={icon} alt={alt} className="size-4 md:size-5 " />
      {isDesktop && isSidebarOpen && <span className="">{label}</span>}
    </div>
  );
};

export default SideBarItem;
