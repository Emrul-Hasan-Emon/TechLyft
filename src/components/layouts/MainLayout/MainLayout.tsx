import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#F0F0F0]">
      {/* <Navbar></Navbar> */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
