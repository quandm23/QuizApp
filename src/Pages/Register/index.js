import { register } from "../../FetAPI/userjson";
import { addAPI, getAPI } from "../../services";
import { randomToken } from "../../utils";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const isSubmit = async (e) => {
    e.preventDefault();

    // Lấy input
    let fullName = e.target.fullName.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    //Check nhập input
    if (fullName && email && password) {

      // Check Email exits
      const rs = await getAPI("users");
      const check = rs.find(item => item.email === email);
      if (check) {
        alert("Email is exist!");
      } else {
        // tạo ra data add 
        const dataAdd = {
          id: rs.length + 1,
          fullName: fullName,
          email: email,
          password: password,
          token: randomToken(20),
        }

        // Add xong trả về 1 bản ghi
        const result = await register(dataAdd);
        console.log(result);
        if(result){
          navigate("/login");
        }else{
          alert("Wrong");
        }
      }

    } else {
      alert("Please enter all input");
    }
  };
  return (<>
    <div className="container">
      <div className="login">
        <form onSubmit={isSubmit}>
          <h1 className="login__title">Register</h1>
          <div>
            <label for="fullName">FullName:</label>
            <input type="text" className="login__input" id="fullName" placeholder="FullName.." />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" className="login__input" id="email" placeholder="UserName.." />
          </div>

          <div>
            <label for="password">Password:</label>
            <input type="text" className="login__input" id="password" placeholder="Password.." />
          </div>
          <div className="center">
            <button className="login__button">Register</button>
          </div>
        </form>

      </div>
    </div>
  </>);
}

export default Register;