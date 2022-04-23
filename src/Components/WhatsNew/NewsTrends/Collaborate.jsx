import React from "react";
import { Image, LatestNewsCardWrapper } from "../NewsCard/latestNewsCard.styles";
import pic1 from "../../../assests/trends/11.jpg";

const Collaborate = ({
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
        <p>{authorName || "Martin reporter"}</p>
      </span>
      <span>
        {" "}
        {cartText ||
          "As the World Bank’s ongoing mapping of Tech Hubs in Africa comes out with its newest edition, we wanted to share the rationale behind this exercise and highlight its links to other efforts in this innovative space."}
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
          {btnText || "Tech Newest"}
        </button>
      </span>
    </LatestNewsCardWrapper>
  );
};

export default Collaborate;
