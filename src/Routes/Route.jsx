import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


const route = createBrowserRouter([
{
path:'/',
element:<MainLayout></MainLayout>,
children:[

    {
path:'/',
element:<Home></Home>

    },
    {
        path:'/login',
        element:<Login></Login>
    }
]

}
]);
export default route;