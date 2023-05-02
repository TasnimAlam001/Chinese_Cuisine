import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../components/Blog/Blog";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element : <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
                
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
])
export default router;