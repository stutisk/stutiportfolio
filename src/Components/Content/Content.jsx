import { Tokenomics } from "../../Tokenomics/Tokenomics";
import { About } from "../About/About";
import { Performance } from "../Performance/Performance";
import { Sentiment } from "../Sentiment/Sentiment";
import { Team } from "../Team/Team";
import "./Content.css";
export const Content = () => {
  return (
    <section className="flex flex-column gap2">
      <div className="content-section">
        <button className="no-background-or-border">Overview</button>
        <button className="no-background-or-border">Fundamentals</button>
        <button className="no-background-or-border">News Insights</button>
        <button className="no-background-or-border">Sentiments</button>
        <button className="no-background-or-border">Team</button>
        <button className="no-background-or-border">Technicals</button>
        <button className="no-background-or-border">Tokenomics</button>
      </div>
     <Performance/>
      <Sentiment/>
      <About/>
      <Tokenomics />
      <Team />
    </section>
  );
};
