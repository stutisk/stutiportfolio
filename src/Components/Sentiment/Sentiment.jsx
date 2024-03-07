import image1 from "../../assests/Sentiment1.svg";
import image2 from "../../assests/Sentiment2.svg";
import i from "../../assests/Sentiment.svg";
import chart from "../../assests/Sentiment3.svg";
export const Sentiment = () => {
  const cardData = [
    {
      id: 1,
      color: "#E8F4FD",
      border: "1px solid #E8F4FD",

      imageUrl: image1,
    },
    {
      id: 2,
      color: "#EBF9F4",
      border: "1px solid #E8F4FD",

      imageUrl: image2,
    },
  ];
  return (
    <section className="trending-coins flex flex-column  gap2">
      <h3>Sentiment </h3>
      <div className="flex gap1">
        <div className="font-size1 btc font-weight600">Key Events</div>
        <figure>
          <img src={i} alt="Bitcoin" />
        </figure>
      </div>
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
              <div>
                <p className="mt0">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </p>
                <div className="font-size1 btc ">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex gap1">
        <div className="font-size1 btc font-weight600">Analyst Estimates</div>
        <figure>
          <img src={i} alt="Bitcoin" />
        </figure>
       
      </div>
      <figure>
                <img src={chart} alt="logo" />
              </figure>
      
    </section>
  );
};
