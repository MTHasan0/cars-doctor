import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Services from "../Pages/Home/Services";
import MyBooking from "../Pages/Booking/MyBooking";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/service',
          element: <Services></Services>
        },
        {
          path: '/mybooking',
          element: <PrivateRoutes><MyBooking></MyBooking></PrivateRoutes>,
          
        },
       
        {
          path:'checkout/:id',
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader: ({params}) =>fetch(`https://car-doctor-server-rosy-five.vercel.app/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;