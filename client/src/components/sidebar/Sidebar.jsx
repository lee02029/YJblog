import "./sidebar.css"

export default function sidebar() {
    return (
        <div className= "sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img 
                src="img/sidebar.jpg"
                alt=""
             />
             <p>
                 I'm YoonJae Lee. I learn about React & Node JS 
                 and hope to be Frontend developer. I appreciate it. 
             </p>
         </div>
         <div className="sidebarItem">
             <span className="sidebarTitle">CATEGORIES</span>
             <ul className="sidebarListItem">
                 <li className="sidebarListItem">
                     React
                 </li>
                 <li className="sidebarListItem">
                     Node-js
                 </li>               
                 <li className="sidebarListItem">
                     Database
                 </li>
                 <li className="sidebarListItem">
                     Algorithm
                 </li>
                 <li className="sidebarListItem">
                     Project
                 </li>
             </ul>
         </div>
         <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-github-square"></i>
             </div>
         </div>
        </div>
    )
}
