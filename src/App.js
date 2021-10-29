import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateNewEvent from "./Pages/CreateNewEvent/CreateNewEvent";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/createNewEvent">
            <CreateNewEvent></CreateNewEvent>
          </Route>
          <Route path="/aboutUs">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
