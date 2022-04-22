import React from "react";
import { Image, LatestNewsCardWrapper } from "./latestNewsCard.styles";
import pic1 from "../../../assests/images/social cards.png";

const InterestCard = ({
  cardImage,
  authorImage,
  authorName,
  cartText,
  btnText,
}) => {
  return (
    <LatestNewsCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic1} alt={"image"} />
      </div>
      <span>
        <Image className="img" src={authorImage || pic1} alt={"image"} />
        <p>{authorName || "John Doe"}</p>
      </span>
      <span>
        {" "}
        {cartText ||
          "Gathers the major digital skills initiatives from across Europe. "}
      </span>
      <span>
        <button
          className="btn"
          style={{
            height: "30px",
            fontSize: "12px",
            padding: "0px 15px",
            borderRadius: "4px",
          }}
        >
          {btnText || "News"}
        </button>
      </span>
    </LatestNewsCardWrapper>
  );
};

export default InterestCard;
