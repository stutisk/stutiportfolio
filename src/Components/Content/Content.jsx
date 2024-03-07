import { Tokenomics } from "../../Tokenomics/Tokenomics";
import { About } from "../About/About";
import { Performance } from "../Performance/Performance";
import { Sentiment } from "../Sentiment/Sentiment";
import { Team } from "../Team/Team";
import { useState } from "react";
import "./Content.css";
export const Content = () => {
  const [activeButton, setActiveButton] = useState("Overview");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttons = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <section className="flex flex-column gap2">
      <div className="content-section">
        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            className={`no-background-or-border ${
              activeButton === buttonName ? "active-button" : ""
            }`}
            onClick={() => handleClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
      <Performance />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </section>
  );
};
