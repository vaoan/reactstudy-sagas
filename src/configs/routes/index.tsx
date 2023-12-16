import Footer from "components/structural/footer";
import Header from "components/structural/header";
import Menu from "components/structural/menu";
import MainLayout from "components/layout/main";
import { createBrowserRouter } from "react-router-dom";
import Login from "pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout
        {...{ header: <Header />, menu: <Menu />, footer: <Footer /> }}
      />
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout
        {...{ header: <Header />, menu: <Menu />, footer: <Footer /> }}
      />
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
