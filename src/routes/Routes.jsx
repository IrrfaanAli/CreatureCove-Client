import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import AllToys from "../pages/AllToys";
import PrivateRoute from "../component/PrivateRoute";
import AddToy from "../pages/AddToy";
import ErrorPage from "../pages/ErrorPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import MyToys from "../pages/MyToys";
import UpdateToy from "../pages/UpdateToy";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children :[
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "blogs",
                element :<Blogs></Blogs>
            },{
                path :'login',
                element : <Login></Login>
            },
            {
                path : 'signup',
                element : <Signup></Signup>
            },
            {
              path: 'toys/:id',
              element : <PrivateRoute> <ViewDetailsPage></ViewDetailsPage></PrivateRoute>,
              loader : ({params}) => fetch(`https://assignment11-tan.vercel.app/toys/${params.id}`)
            },
            {
              path : 'alltoys',
              element : <AllToys></AllToys>,
              loader : ()=> fetch("https://assignment11-tan.vercel.app/toys/")
            },
            {
              path : 'addtoy',
              element : <PrivateRoute><AddToy></AddToy></PrivateRoute> ,
             
            },
            {
              path :"*",
              element:<ErrorPage></ErrorPage>
             },
             {
               path :'mytoys',
               element : <PrivateRoute><MyToys></MyToys></PrivateRoute> 
             },
             {
               path : "updatetoy/:id",
               element :<UpdateToy></UpdateToy>,
               loader : ({params}) => fetch(`https://assignment11-tan.vercel.app/toys/${params.id}`)
             }

          ]
        },
      ]); 


export default router;