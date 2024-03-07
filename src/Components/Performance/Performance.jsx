import i from "../../assests/Sentiment.svg";
import chart from "../../assests/Performance.svg";
export const Performance = () => {
  const fundamnets = [
    { performance: "Bitcoin Price", Price: "$16,815.46" },
    { performance: "24h Low / 24h High", Price: "$16,382.07 / $16,874.12" },
    { performance: "7d Low / 7d High", Price: "$16,382.07 / $16,874.12" },
    { performance: "Trading Volume", Price: "$23,249,202,782" },
    { performance: "Market Cap Rank", Price: "$1" },
    { performance: "Market Cap", Price: "$16,815.46" },
    { performance: "Market Cap Dominance", Price: "$16,382.07 / $16,874.12" },
    { performance: "Volume / Market Cap", Price: "$16,382.07 / $16,874.12" },
    {
      performance: "All-Time High",
      Price: "$23,249,202,782",
      percent: "-75%",
      time: "Nov 10, 2021 (about 1 year)",
    },
    {
      performance: "Market Cap Rank",
      Price: "$67.81 ",
      percent: " +24729.1%",
      time: "Nov 10, 2016 (over 9 years)",
    },
  ];
  return (
    <section className="trending-coins flex flex-column  gap2">
      <h3>Performance</h3>
      <figure>
        <img src={chart} alt="logo" />
      </figure>
      <div className="flex gap1">
        <div className="font-size1 btc font-weight600">Fundamentals</div>
        <figure>
          <img src={i} alt="Bitcoin" />
        </figure>
      </div>
      <div className="flex flex-space-between">
        <div className="flex gap2 flex-column width45 ">
          {fundamnets.slice(0, 5).map((performance) => (
            <div className="flex flex-space-between  perfomance">
              <div className="font-size1 btc font-weight600 ">
                {performance.performance}
              </div>
              <div className="font-size1  font-weight600">
                {" "}
                {performance.Price}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap2 flex-column width45 ">
          {fundamnets.slice(5).map((performance) => (
            <div className="flex flex-space-between perfomance">
              <div className="font-size1 btc  font-weight600">
                {performance.performance}
              </div>
              <div className="performace-time">
                <div className="font-size1  font-weight600 ">
                  {" "}
                  {performance.Price}
                  <span
                    className="performace-percent"
                    style={{
                      color: performance.percent === "-75%" ? "red" : "green",
                    }}
                  >
                    {performance.percent}
                  </span>{" "}
                </div>
                <div className=" "> {performance.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
