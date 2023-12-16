import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
