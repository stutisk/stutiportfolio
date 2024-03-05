import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App background-color">
      <Navbar />
      <div className="grid-container">
        <div class="grid-item item1">Item 1</div>
        <div class="grid-item item2">Item 2</div>
        <div class="grid-item item3">Item 3</div>
      </div>
    </div>
  );
}

export default App;
