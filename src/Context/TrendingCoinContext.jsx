import { useEffect } from "react";
import axios from "axios";
import { TRENDING_URL, PRICEOFBITCOIN_URL } from "../Services/apiUrls";
import { createContext, useState, useContext } from "react";
const TrendingCointContext = createContext();
export const useTrendingCoin = () => useContext(TrendingCointContext);
export const TrendingCoinProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [bitcoinPrice, setBitcoinPrice] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(TRENDING_URL);

        setTrendingCoins(res.data.coins);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const params = {
          ids: "bitcoin",
          vs_currencies: "inr,usd",
          include_24hr_change: true,
        };
        const res = await axios.get(PRICEOFBITCOIN_URL, { params });
        setBitcoinPrice(res.data.bitcoin);

        console.log(res.data.bitcoin);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <TrendingCointContext.Provider
      value={{ trendingCoins, setTrendingCoins, setBitcoinPrice, bitcoinPrice }}
    >
      {children}
    </TrendingCointContext.Provider>
  );
};
