import { Outlet } from "react-router-dom";

const FormLayout = ({ children }) => {
  return (
    <section className="w-screen mx-auto py-10 px-5 text-sm lg:w-[70%] lg:px-20">
      {children}
      <Outlet />
    </section>
  );
};

export default FormLayout;
