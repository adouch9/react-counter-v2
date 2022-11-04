import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  // const [add, setAdd] = useState(<Counter />);
  return (
    <div className="App">
      <button
        onClick={() => {
          // setAdd();
        }}
        className="addCounter"
      >
        Add counter
      </button>
      <Counter counter={counter} setCounter={setCounter} />
      {/* {counter ? <Counter /> : ""} */}
    </div>
  );
}

export default App;
