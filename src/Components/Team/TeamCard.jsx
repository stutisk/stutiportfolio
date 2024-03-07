import "../Team/Team.css";
import Team from "../../assests/team.svg"
export const TeamCard = () => {
  return (
    <div className="team-card flex gap2">
      <div className="left-side flex flex-column">
        <div className="card-image">
          <img alt="Card" src={Team} /> 
        </div>
        <div className="font-weight600">Jhon Smith</div>
        <div className="btc ">Frontend Developer</div>
      </div>

      <div className="card-text">
        <p className="team-content">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
      </div>
    </div>
  );
};
