import "./login.css"

export default function login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <from className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </from>
            <button className="loginRegisterButton">Register</button>   
        </div>
    );
}
