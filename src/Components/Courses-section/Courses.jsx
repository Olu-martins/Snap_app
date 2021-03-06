import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
	{
		id: "01",
		title: "Ultimate Web Designer & Web Developer Courses",
		lesson: 35,
		hours: 128,
		rating: 5,
		imgUrl: courseImg1,
	},

	{
		id: "02",
		title: "The Absolute Beginners Guide to Cyber Security ",
		lesson: 27,
		hours: 94,
		rating: 5,
		imgUrl: courseImg2,
	},

	{
		id: "03",
		title: "The Complete Financial Analyst & Investing Courses",
		lesson: 52,
		hours: 63,
		rating: 5,
		imgUrl: courseImg3,
	},
];

const Courses = () => {
	return (
		<section>
			<Container className="course">
				<Row>
					<Col lg="12" className="mb-5">
						<div className="course__top d-flex justify-content-between align-items-center">
							<div className="course__top__left w-50">
								<h2>Selection of courses</h2>
								<p>
									Learning that gets you Skills for your present (and your
									future). Get started with us! <br /> Choose from variety of
									online video courses with new additions published regularly
								</p>
							</div>

							<div className="w-50 text-end">
								<button className="btn">See All</button>
							</div>
						</div>
					</Col>
					{coursesData.map((item) => (
						<Col lg="4" md="6" sm="6">
							<CourseCard key={item.id} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Courses;
