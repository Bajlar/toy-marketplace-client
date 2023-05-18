import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home/Home";
import Error from "../components/error/Error/Error";
import Blog from "../components/blogs/Blog/Blog";

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
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      }
    ]
  }
]);

export default router;
