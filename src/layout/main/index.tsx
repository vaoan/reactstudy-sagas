import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {
  header: ReactNode;
  menu: ReactNode;
  footer: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ header, footer, menu }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>{header}</header>
      <div className="flex flex-grow">
        <div className="w-1/4 bg-gray-200">{menu}</div>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
};

export default MainLayout;
