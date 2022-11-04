import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [tab, setTab] = useState([0]);

  return (
    <div className="App">
      <button
        onClick={() => {
          const newTab = [...tab];
          newTab.push(<Counter />);
          setTab(newTab)
        }}
        className="addCounter"
      >
        Add counter
      </button>
      <Counter tab={tab} setTab={setTab} />
      {/* {counter ? <Counter /> : ""} */}
    </div>
  );
}

export default App;
