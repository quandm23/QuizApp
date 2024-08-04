import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Topic from "./../Pages/Topic";
import LayOut from "../Components/LayOut";
import Logout from "../Pages/Logout";
import Quiz from "./../Pages/Quiz"


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
           },
           {
            path : "topic",
            element : <Topic/>
           },
           {
            path : "quiz/:id",
            element : <Quiz/>
           }
        
        ]
    }
];