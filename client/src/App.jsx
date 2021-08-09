import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./components/singlepost/Singlepost";

function App() {
  const currentUser = true;
  return (   
    <Router> 
      <TopBar />   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/post" component={SinglePost} />
      </Switch>     
    </Router>
  );
}

export default App;
