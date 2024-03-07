import { useTrendingCoin } from "../../Context/TrendingCoinContext";
import "./YouMayLike.css";
import { useState } from "react";
export const YouMayLike = () => {
  const { trendingCoins } = useTrendingCoin();
  const cardsonpage = 5;

  const [currentCard, setCurrentCard] = useState(0);

  const maxPage = Math.ceil(trendingCoins.length / cardsonpage) - 1 ;

  const goToPrev = () => {
    setCurrentCard((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNext = () => {
    setCurrentCard((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const startIdx = currentCard * cardsonpage;
  const endIdx = startIdx + cardsonpage;
  const itemsToShow = trendingCoins.slice(startIdx, endIdx);

  return (
    <section className="main-section">
      <div>
        <h3>You May Also Like</h3>
        <div className="card-container gap1">
          {currentCard > 0 && (
            <button onClick={goToPrev} className="arrow left">
              {"<"}
            </button>
          )}
          {itemsToShow.map((coin, index) => (
            <div className="card" key={index}>
              <div className="flex gap1">
                <figure>
                  <img
                    src={coin.item.small}
                    width="24px"
                    height="24px"
                    alt="Tr"
                  />
                </figure>
                <div>{coin.item.symbol}</div>
              </div>

              <div className="flex">{coin.item.data.price}</div>

              <div className="flex justify-centre">
                {" "}
                <figure>
                  <img src={coin.item.data.sparkline} alt="sparkline" />
                </figure>
              </div>
            </div>
          ))}
          {currentCard < maxPage && (
            <button onClick={goToNext} className="arrow right">
              {">"}
            </button>
          )}
        </div>
      </div>
      <div>
        <h3>You May Also Like</h3>
        <div className="card-container gap1">
          {currentCard > 0 && (
            <button onClick={goToPrev} className="arrow left">
              {"<"}
            </button>
          )}
          {itemsToShow.map((coin, index) => (
            <div className="card" key={index}>
              <div className="flex gap1">
                <figure>
                  <img
                    src={coin.item.small}
                    width="24px"
                    height="24px"
                    alt="Tr"
                  />
                </figure>
                <div>{coin.item.symbol}</div>
              </div>

              <div className="flex">{coin.item.data.price}</div>

              <div className="flex justify-centre">
                {" "}
                <figure>
                  <img src={coin.item.data.sparkline} alt="sparkline" />
                </figure>
              </div>
            </div>
          ))}
          {currentCard < maxPage && (
            <button onClick={goToNext} className="arrow right">
              {">"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
