import React from "react";
import {
	Image,
	InterestCardWrapper,
} from "../DigitalSkillsCard/digitalSkillsCard.styles";
import pic from "../../../assests/images/Collaborate.png";

const MeetIndustries = ({ cardImage, cartText }) => {
	return (
		<InterestCardWrapper>
			<div className="card_image_wrapper">
				<Image src={cardImage || pic} alt={"image"} />
			</div>
			<span className="card_text_wrapper">
				{" "}
				<div className="title">
					{cartText || "Open to partner with success-driven firms"}
				</div>
				<div className="body">
					{cartText ||
						`The business management and training Platform. Open to partner with 
            success-driven firms across the world that can provide management advisory 
            and contracting services customized to help Nigerian undergraduates(youths),
             with from business management, to leadership, and managing complex projects and initiatives.
`}
				</div>
			</span>
		</InterestCardWrapper>
	);
};

export default MeetIndustries;
