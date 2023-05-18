import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home/Home";
import Error from "../components/error/Error/Error";

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error></Error>
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
]);

export default router;
