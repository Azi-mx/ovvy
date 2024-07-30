import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col min-h-[calc(100dvh-80px)] gap-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
