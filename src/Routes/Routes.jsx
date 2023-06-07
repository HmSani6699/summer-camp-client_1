import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/manu',
          element:<Manu></Manu>
        },
       
        {
          path:'/order/:category',
          element:<PrivetRoutes><Order></Order></PrivetRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
      children:[
        {
          path:'myCart',
          element:<PrivetRoutes><MyCart></MyCart></PrivetRoutes>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        }
      ]
    }
  ]);