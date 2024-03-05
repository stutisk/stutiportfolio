import { useEffect } from "react";
import axios from "axios";
import { TRENDING_URL } from "../Services/apiUrls";
import { createContext, useState, useContext } from "react";
const TrendingCointContext = createContext();
export const useTrendingCoin = () => useContext(TrendingCointContext);
export const TrendingCoinProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

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

  return (
    <TrendingCointContext.Provider value={{ trendingCoins, setTrendingCoins }}>
      {children}
    </TrendingCointContext.Provider>
  );
};
