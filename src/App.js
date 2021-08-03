import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </Switch>     
    </Router>
  );
}

export default App;
