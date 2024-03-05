import { useTrendingCoin } from "../../Context/TrendingCoinContext";
import "./TrendingComponents.css";
import Arrow from "../../assests/Arrow.svg";

import Image from "../../assests/img1.svg";
export const TrendingComponents = () => {
  const { trendingCoins } = useTrendingCoin();
  console.log(trendingCoins);
  return (
    <div className="flex flex-column gap2">
      <figure>
        <img src={Image}  alt="Tr" />
      </figure>
      <section className="trending-coins">
        <h3>Trending Coins (24h) </h3>
        <div className="flex flex-space-between flex-column gap1">
          {trendingCoins.slice(0, 3).map((coins) => (
            <>
              <div className="flex flex-space-between ">
                <div className="flex gap1">
                  <figure>
                    <img
                      src={coins.item.small}
                      width="24px"
                      height="24px"
                      alt="Tr"
                    />
                  </figure>
                  <div>{coins.item.symbol}</div>
                </div>

                <div className="percent flex gap1">
                  <figure>
                    <img src={Arrow} height="8px" alt="Tr" width="11px" />
                  </figure>
                  8.21%
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};
