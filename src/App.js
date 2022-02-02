import "./App.css";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";

function App() {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
}

export default App;
