import "./App.css";
import { BitcoinPrice } from "./Components/BitcoinPrice/BitcoinPrice";
import { Content } from "./Components/Content/Content";
import { Navbar, TrendingComponents } from "./Components/index";
import { YouMayLike } from "./Components/YouMayLike/YouMayLike";
import arrow from "./assests/mainarrow.svg";

function App() {
  return (
    <div className="App background-color">
      <Navbar />
      <div className=" mt6 main-content flex gap1">
        {" "}
        <div className="font-size1 btc"> Cryptocurrencies </div>
        <div className="flex">
          <figure>
            <img src={arrow} cl alt="logo" />
          </figure>
        </div>
        <div className=""> Bitcoin </div>
      </div>

      <div className="grid-container">
        <div class="grid-item item1">
          <BitcoinPrice />
          <Content />
        </div>
        <div class="grid-item item2">
          <TrendingComponents />
        </div>
        <div class="grid-item item3 ">
          <YouMayLike />
        </div>
      </div>
    </div>
  );
}

export default App;
