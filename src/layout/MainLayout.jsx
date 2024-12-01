// rrd import
import { Outlet } from "react-router-dom";
// components imports
import Navbar from "../components/Navbar";
function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
}

export default MainLayout;
