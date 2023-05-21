import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home/Home";
import Error from "../components/error/Error/Error";
import Blog from "../components/blogs/Blog/Blog";
import Login from "../components/login/Login/Login";
import SignUp from "../components/login/SignUp/SignUp";
import AddAToy from "../components/toyPage/AddAToy";
import AllToys from "../components/toyPage/AllToys";
import Info from "../components/toyPage/Info";
import MyToys from "../components/toyPage/MyToys";
import UpdateToy from "../components/toyPage/UpdateToy";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/toys",
        element: (
          <PrivetRoute>
            <AddAToy></AddAToy>
          </PrivetRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/information/:id",
        element: (
          <PrivetRoute>
            <Info></Info>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-street-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-street-server.vercel.app/toys/${params.id}`),
      }
    ],
  },
]);

export default router;
