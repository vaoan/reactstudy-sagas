import Footer from "components/structural/footer";
import Header from "components/structural/header";
import Menu from "components/structural/menu";
import MainLayout from "layout/main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout
        {...{ header: <Header />, menu: <Menu />, footer: <Footer /> }}
      />
    ),
  },
]);

export default router;
