import Footer from "components/structural/footer";
import Menu from "components/structural/menu";
import MainLayout from "components/layout/main";
import { createBrowserRouter } from "react-router-dom";
import Login from "pages/login";
import BasicLayout from "components/layout/basic";
import EquipmentList from "pages/equipment";
import Header from "components/structural/header";
import Dashboard from "components/layout/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout
        {...{ header: <Header />, menu: <Menu />, footer: <Footer /> }}
      />
    ),
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/equipment",
        element: <EquipmentList />,
      },
    ],
  },
  {
    path: "/login",
    element: <BasicLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
