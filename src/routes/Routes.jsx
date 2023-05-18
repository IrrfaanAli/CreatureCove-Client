import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
            }
          ]
        },
      ]); 


export default router;