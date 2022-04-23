import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3" md="6" className="mb-4">
						<h2 className=" d-flex align-items-center gap-1">
							<i class="ri-pantone-line"></i> Snaplearn
						</h2>

						<div className="follows">
							<small className="mb-0">New Africa Platform</small>
						</div>
					</Col>

					<Col lg="3" md="6" className="explore">
						<button>
							<h5 className="fw-bold">Term of use</h5>
						</button>
					</Col>
					<Col lg="3" md="6" className="mb-4">
						<button>
							<h5 className="fw-bold">Privacy Policy</h5>
						</button>
					</Col>
					<Col lg="3" md="6">
						<button>
							<h5 className="fw-bold">Get in Touch</h5>
						</button>
						<p>Address: Lagos Nigeria</p>
						<p>Email: Snaplearn@newafrica.com</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
