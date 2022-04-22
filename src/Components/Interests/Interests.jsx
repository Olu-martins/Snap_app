import React from "react";
import "./Interests.css";
import StudentCard from "./Interests-aspect/Students";
import DigitalExpact from "./Interests-aspect/Digital-expact";
import SkillTrainer from "./Interests-aspect/Skill Trainer";
import IndustryExpert from "./Interests-aspect/Industry-Expert";
import TradeUnion from "./Interests-aspect/Trade-Union";
import TrainingFund from "./Interests-aspect/Training-Fund";

export const Interests = () => {
	return (
		<div className="interests">
			<StudentCard />
			<DigitalExpact />
		<IndustryExpert />
			<SkillTrainer />
			<TradeUnion />
			<TrainingFund />
		</div>
	);
};
