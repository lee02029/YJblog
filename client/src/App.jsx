import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";


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
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>     
    </Router>
  );
}

export default App;
