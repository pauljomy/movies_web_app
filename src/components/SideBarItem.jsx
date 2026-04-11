const SideBarItem = ({
  icon,
  label,
  alt,
  isSidebarOpen,
  isDesktop,
  className,
}) => {
  return (
    <div className="flex gap-5 items-center h-5 hover:bg-gray-800 py-5 px-2 hover:rounded-sm hover:brightness-150 cursor-pointer">
      <img src={icon} alt={alt} className="size-4 md:size-5 shrink-0" />
      {isDesktop && (
        <span
          className={`${className} overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "max-w-40 opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default SideBarItem;
