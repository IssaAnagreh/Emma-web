import React from "react";
import "react-pro-sidebar/dist/css/styles.css";

import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      {<SideMenu />}
      {<Home />}
    </div>
  );
}

export default App;
