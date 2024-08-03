import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayOut.scss"
import { useSelector } from 'react-redux';

function LayOut() {
    const isLogin = useSelector(state => state.loginReducer);
    return (<>
        <header className="header">
            <div className="header__logo"><Link to="/">Quiz</Link></div>
            <div>

            <div className="header__action">
             {isLogin ?
             (<>
              {/* <button><NavLink to="/logout">Quiz</NavLink></button> */}
              <button><NavLink to="/topic">Topic</NavLink></button>
              <button><NavLink to="/answers">Answers</NavLink></button>
             </>) :
             (<></>)}
            </div>

            </div>
            <div className="header__action">
                {isLogin ?
                    (<>
                        <button><NavLink to="/logout">Logout</NavLink></button>
                    </>) :
                    (<>
                        <button><NavLink to="/login">Login</NavLink></button>
                        <button><NavLink to="/register">Register</NavLink></button>
                    </>)}

            </div>
        </header>

        <div className="main">
            <Outlet />
        </div>

        <footer>
            minhquandoan25@gmail.com
        </footer>
    </>);
}

export default LayOut;