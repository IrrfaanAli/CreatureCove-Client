import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ViewDetails from "../component/ViewDetails";
import AllToys from "../pages/AllToys";
import PrivateRoute from "../component/PrivateRoute";
import AddToy from "../pages/AddToy";

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
              element : <PrivateRoute> <ViewDetails></ViewDetails></PrivateRoute>,
              loader : ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
              path : 'alltoys',
              element : <AllToys></AllToys>,
              loader : ()=> fetch("http://localhost:5000/toys/")
            },
            {
              path : 'addtoy',
              element : <AddToy></AddToy> ,
             
            },
            

          ]
        },
      ]); 


export default router;