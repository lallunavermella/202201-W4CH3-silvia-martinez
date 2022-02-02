import "./App.css";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  const clickNumber = (number) => {
    setNumbers([...numbers, number]);
  };
  console.log(numbers);
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard action={clickNumber} />
        <Actions numbers={numbers} />
      </main>
    </div>
  );
}

export default App;
