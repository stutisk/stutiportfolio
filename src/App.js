import "./App.css";
import { BitcoinPrice } from "./Components/BitcoinPrice/BitcoinPrice";
import { Content } from "./Components/Content/Content";
import { Navbar,TrendingComponents } from "./Components/index"
import { YouMayLike } from "./Components/YouMayLike/YouMayLike";


function App() {
  return (
    <div className="App background-color">
      <Navbar />
  
      <div className="grid-container">
        <div class="grid-item item1">

          <BitcoinPrice/>
          <Content/>
         
        </div>
        <div class="grid-item item2">
          <TrendingComponents/>
        </div>
        <div class="grid-item item3 ">
          
          <YouMayLike/>
          
          </div>
      </div>
    </div>
  );
}

export default App;
