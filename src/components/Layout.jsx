import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <div className="min-h-[calc(100dvh-20px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
