import { useDispatch } from "react-redux";
import { setCookie } from "../../cookie";
import { login } from "../../FetAPI/userjson";
import { useNavigate } from 'react-router-dom';
import {checkLogin} from './../../actions/login';
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    if (email && password) {
      const result = await login(email, password);
      if (result.length > 0) {
        setCookie("id", result[0].id, 2);
        setCookie("email", result[0].email, 2);
        setCookie("fullName", result[0].fullName, 2);
        setCookie("token", result[0].token, 2);
        console.log(result[0].fullName);
        console.log(result[0].token);
        dispatch(checkLogin(true));
        navigate("/");
      } else {
        alert("Email or Passwordnot correct");
      }
    } else {
      alert("Please enter email and password");
    }

  };

  return (<>
    <div className="container">
      <div className="login">
        <form onSubmit={isSubmit}>
          <h1 className="login__title">Login</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" className="login__input" id="email" placeholder="Email.." />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" className="login__input" id="password" placeholder="Password.." />
          </div>
          <div className="center">
            <button className="login__button">Login</button>
          </div>
        </form>

      </div>
    </div>
  </>);
}

export default Login;