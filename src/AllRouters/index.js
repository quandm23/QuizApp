import { useRoutes } from "react-router-dom";
import {Routers} from './../Routers';

function AllRoutes(){
    const AllRoutes = useRoutes(Routers);
    return (<>{AllRoutes}</>);
  }
  
  export default AllRoutes;