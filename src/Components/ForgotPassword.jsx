import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import "./login.css";

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for reset password link & instruction");
		} catch {
			setError("Failed to reset password");
		}
		setLoading(false);
	}

	return (
		<div className="main">
			<div className="aside-container">
				<div className="aside-content"> </div>
			</div>
			<div className="login-container">
				<Container className="forgotpassword">
					<Card className="card">
						<Card.Body>
							<h2 className="text-center mb-3">{"Password Reset"}</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							{message && <Alert variant="success">{message}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>{"Email"}</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Button disabled={loading} className="w-100 mt-3" type="submit">
									{"Reset Password"}
								</Button>
							</Form>
							{/* <div className="w-100 text-center mt-3">
								<Link to="/login">{"Log In"}</Link>
							</div> */}
						</Card.Body>
					</Card>
					{/* <div className="w-100 text-center mt-2 card-links">
						{"Don't have an account?"} <Link to="/signup">{"Sign Up"}</Link>
					</div> */}
				</Container>
			</div>
		</div>
	);
}
