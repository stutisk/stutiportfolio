import "./About.css";
import image1 from "../../assests/about1.svg";
import image2 from "../../assests/about2.svg";
export const AboutCard = () => {
  const cardData = [
    {
      id: 1,
      color: "linear-gradient(135deg, #79f1a4 0%, #0e5cad 100%)",
      title: "Calculate your Profits",

      imageUrl: image1,
    },
    {
      id: 2,
      color: " linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)",
      title: "Calculate your tax liability",

      imageUrl: image2,
    },
  ];

  return (
    <div className="flex gap2">
      {cardData.map((card) => (
        <div
          style={{
            background: card.color,
            padding: "1rem",
            borderRadius: "7px",
          }}
          className="flex gap2"
        >
          <div>
            <figure>
              <img src={card.imageUrl} alt="logo" />
            </figure>
          </div>
          <div>
            <div className="card-about">
              <h3>{card.title}</h3>
            </div>
            <button className="about-btn">Check Now </button>
          </div>
        </div>
      ))}
    </div>
  );
};
