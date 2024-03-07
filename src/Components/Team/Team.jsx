import "../TrendingComponents/TrendingComponents.css";
import "./Team.css";
import { TeamCard } from "./TeamCard";
export const Team = () => {
  return (
    <section className="trending-coins">
      <h3>Teams</h3>
      <p className="team-content">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex gap2 flex-column">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      </div>
    </section>
  );
};
