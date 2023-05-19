import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home/Home";
import Error from "../components/error/Error/Error";
import Blog from "../components/blogs/Blog/Blog";
import Login from "../components/login/Login/Login";
import SignUp from "../components/login/SignUp/SignUp";

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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

export default router;
