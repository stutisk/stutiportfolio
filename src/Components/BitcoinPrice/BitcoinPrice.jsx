
import "./BitcoinPrice.css";
import "../TrendingComponents/TrendingComponents.css";
import TradingViewWidget from "../Graphs/TradingViewWidget";
import Bitcoin from "../../assests/Bitcoin.svg";
import Arrow from "../../assests/Arrow.svg";
import { useTrendingCoin } from "../../Context/TrendingCoinContext";

export const BitcoinPrice = () => {
  const { bitcoinPrice } = useTrendingCoin();

  return (
    <section className="bitcoin-price trending-coins flex flex-column gap2">
      <div className="flex gap2">
        <div className="flex gap1">
          <div className="flex">
            {" "}
            <figure>
              <img src={Bitcoin} alt="Bitcoin" height="30px" />
            </figure>
          </div>
          <h3 className="margin0">Bitcoin</h3>
          <div className="font-size1 btc font-weight600">BTC</div>
        </div>
        <div className="rank">Rank #1</div>
      </div>

      <div>
    
          <>
            <div className="flex gap2">
              <div className="font-size2 font-weight600">${bitcoinPrice.usd}</div>
              <div className="flex gap1 ">
                <div className="percent flex gap1">
                  <figure>
                    <img src={Arrow} height="8px" alt="Tr" width="11px" />
                  </figure>
                  8.21%
                </div>
                <div className="font-size1 btc ">(24H)</div>
              </div>
            </div>
            <div className="font-size1 font-weight600">₹ {bitcoinPrice.inr}</div>
          </>
        
      </div>
      <TradingViewWidget />
    </section>
  );
};
