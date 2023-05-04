import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../components/Blog/Blog";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import Recipes from "../pages/Home/Recipes/Recipes";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

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
                path:'/chef/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
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
            },
            {
                path: '*',
                element:<NotFound></NotFound>
            }
        ]
        
        

    }
    
])
export default router;