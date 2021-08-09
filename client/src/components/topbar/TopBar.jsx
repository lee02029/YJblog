import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar(){
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-github-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/About">
                            About
                        </Link>
                    </li>                        
                    <li className="topListItem">
                        <Link className="link" to="/Posts">
                            Posts
                        </Link>
                    </li>                      
                    <li className="topListItem">
                        <Link className="link" to="/Login">
                            LOGIN
                        </Link>
                    </li>                      
                    <li className="topListItem">
                        <Link className="link" to="/LOGOUT">
                            LOGOUT
                        </Link>
                    </li>                  
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg"
                src="img/iphone_01.jpg"
                alt=""
            />
            <i className="topSearch fas fa-search"></i>
            </div>
        </div>
    )
}