import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enables");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled");
    }
  };
  return (
    // <Router>
    <div className="App">
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter your Text below" />
          {/* <Switch>
            <Route  path="/About">
              <About />
            </Route>
            <Route path="/">
              
            </Route>
          </Switch> */}
        
      </div>
    </div>
    
  );
}

export default App;
