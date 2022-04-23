import React from "react";
import { Image, LatestNewsCardWrapper } from "../NewsCard/latestNewsCard.styles";
import pic1 from "../../../assests/trends/8.jpg";

const Newsone = ({
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
        <p>{authorName || "Fitch Solutions"}</p>
      </span>
      <span>
        {" "}
        {cartText ||
          "Fitch Solutions Country Risk & Industry Research analysts outline the key themes they believe will play out globally, regionally, and across core industries in 2022."}
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
          {btnText || "Market trends and analysis"}
        </button>
      </span>
    </LatestNewsCardWrapper>
  );
};

export default Newsone;
