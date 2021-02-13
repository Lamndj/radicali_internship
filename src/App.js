import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Confirmation from "./Pages/Confirmation/Confirmation";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";

function App() {
  const handleDarkMode = (e, val) => {
    if (val) {
      document.documentElement.classList.add("dark__mode");
      document.querySelectorAll(".color__inverted").forEach((ele) => {
        ele.classList.add("color__invert");
      });
    } else {
      document.documentElement.classList.remove("dark__mode");
      document.querySelectorAll(".color__inverted").forEach((ele) => {
        ele.classList.remove("color__invert");
      });
    }
  };
  return (
    <>
      <Toggle
        onText="Dark"
        offText="Light"
        onChange={handleDarkMode}
        className="app__toggleBtn"
      />
      <BrowserRouter primary={false}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/confirm" exact={true} component={Confirmation} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
