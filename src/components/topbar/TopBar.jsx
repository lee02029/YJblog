import "./topbar.css"

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
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">CATEGORIES</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGIN</li>
                    <li className="topListItem">LOGOUT</li>
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