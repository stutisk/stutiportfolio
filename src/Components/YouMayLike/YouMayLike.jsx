import { useTrendingCoin } from "../../Context/TrendingCoinContext";
import "./YouMayLike.css";
import { useState } from "react";
export const YouMayLike = () => {
  const { trendingCoins } = useTrendingCoin();
  const cardsonpage = 5;

  const [currentCard, setCurrentCard] = useState(0);
  const [currentCard1, setCurrentCard1] = useState(0);
  const maxPage = Math.ceil(trendingCoins.length / cardsonpage) - 1 ;
  const maxPage1 = Math.ceil(trendingCoins.length / cardsonpage) - 1 ;
  const goToPrev = () => {
    setCurrentCard((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNext = () => {
    setCurrentCard((prevPage) => Math.min(prevPage + 1, maxPage));
  };


  const goToPrev1 = () => {
    setCurrentCard1((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNext1 = () => {
    setCurrentCard1((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const startIdx1 = currentCard1 * cardsonpage;
  const endIdx1 = startIdx1 + cardsonpage;
  const itemsToShow1 = trendingCoins.slice(startIdx1, endIdx1);

  const startIdx = currentCard * cardsonpage;
  const endIdx = startIdx + cardsonpage;
  const itemsToShow = trendingCoins.slice(startIdx, endIdx);

  return (
    <section className="main-section">
      <div>
        <h3>You May Also Like</h3>
        <div className="card-container gap1">
          {currentCard > 0 && (
            <button onClick={goToPrev} className="arrow left arrow-card arrow-left-card">
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
            <button onClick={goToNext} className="arrow right  arrow-card arrow-right-card">
              {">"}
            </button>
          )}
        </div>
      </div>
      <div>
        <h3>You May Also Like</h3>
        <div className="card-container gap1">
          {currentCard1 > 0 && (
            <button onClick={goToPrev1} className="arrow left arrow-card arrow-left-card">
              {"<"}
            </button>
          )}
          {itemsToShow1.map((coin, index) => (
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
          {currentCard1 < maxPage1 && (
            <button onClick={goToNext1} className="arrow right  arrow-card arrow-right-card">
              {">"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
