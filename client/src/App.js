import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Categories from "./pages/categories/Categories";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/categoies" component={Categories} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>     
    </Router>
  );
}

export default App;
