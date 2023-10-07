import { Outlet } from "react-router-dom";
import Carearer from "../../components/Carearer";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full flex mx-auto min-h-[100vh] pt-20 relative p-2 bg-white rounded drop-shadow lg:w-[70%] lg:min-h-[70vh] lg:pt-2 lg:mt-10">
      <Carearer />
      {children}
      <Outlet />
    </section>
  );
};

export default MainLayout;
