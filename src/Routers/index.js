import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import LayOut from "../Components/LayOut";
import Logout from "../Pages/Logout";


export const Routers = [
    {
        path : "/",
        element : <LayOut/>,
        children : [
           {
            path : "/",
            element : <Home/>
           },
           {
            path : "login",
            element : <Login/>
           },
           {
            path : "register",
            element : <Register/>
           },
           {
            path : "logout",
            element : <Logout/>
           }
        ]
    }
];