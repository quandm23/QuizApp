import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout (){

    deleteAllCookies();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(checkLogin(false));
        navigate("/login");
    },[]);
    return (<>
    </>);
};
export default Logout;