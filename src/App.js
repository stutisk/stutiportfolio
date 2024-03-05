import "./App.css";
import { Navbar,TrendingComponents } from "./Components/index"


function App() {
  return (
    <div className="App background-color">
      <Navbar />
      <div className="grid-container">
        <div class="grid-item item1">Item 1</div>
        <div class="grid-item item2">
          <TrendingComponents/>
        </div>
        <div class="grid-item item3">Item 3</div>
      </div>
    </div>
  );
}

export default App;
