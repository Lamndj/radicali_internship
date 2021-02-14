import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Confirmation from "./Pages/Confirmation/Confirmation";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const handleDarkMode = (e, val) => {
    if (val) {
      document.documentElement.classList.add("dark__mode");
      dispatch({
        type: "DARK_MODE",
        payload: true,
      });
    } else {
      document.documentElement.classList.remove("dark__mode");
      dispatch({
        type: "DARK_MODE",
        payload: false,
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
