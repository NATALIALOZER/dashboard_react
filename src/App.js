import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";
import RightAside from "./components/RightAside/RightAside";
import { useState } from "react";

function App() {
  const [currentTab, setTab] = useState(0);

  function changeView(tabIndex) {
    setTab(tabIndex);
  }

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar handleTabSwich={changeView} />
        <MainDash currentTab={currentTab} />
        <RightAside />
      </div>
    </div>
  );
}

export default App;
