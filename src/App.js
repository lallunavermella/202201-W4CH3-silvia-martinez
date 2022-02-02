import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const clickNumber = () => {};

  return (
    <div className="container">
      <span className="message">Calling...</span>
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
