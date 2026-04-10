import Navbar from "@/components/Navbar";

const HomePage = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDesktop,
  setIsDesktop,
}) => {
  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isDesktop={isDesktop}
        setIsDesktop={setIsDesktop}
      />
    </div>
  );
};

export default HomePage;
