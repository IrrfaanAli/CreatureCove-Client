import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Main from "../pages/Main";

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
            }
          ]
        },
      ]); 


export default router;