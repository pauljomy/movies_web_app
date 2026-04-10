import HomePage from "@/pages/Home";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  return (
    <div>
      <HomePage
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isDesktop={isDesktop}
        setIsDesktop={setIsDesktop}
      />
    </div>
  );
};
export default App;
