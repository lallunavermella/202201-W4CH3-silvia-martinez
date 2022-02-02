import "./App.css";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";

function App() {
  const clickNumber = () => {
    console.log("hi");
  };

  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard action={clickNumber} />
        <Actions />
      </main>
    </div>
  );
}

export default App;
