import "./App.css";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const clickNumber = () => {};

  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard action={clickNumber} />
        <div className="actions">
          <span className="number">667359961</span>

          <a href="call" className="call">
            Call
          </a>

          <a href="hang" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
