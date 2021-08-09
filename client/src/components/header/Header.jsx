import "./header.css"

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">SEblog</span>
                <span className="headerTitleLg">developer</span>
            </div>
            <img 
                className="headerImg" 
                src= "img/home1.jpg" 
                alt=""
            />
        </div>
    );
}

