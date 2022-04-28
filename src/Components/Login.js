import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import "./login.css";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch {
			setError("Failed to log you in");
		}
		setLoading(false);
	}

	return (
		<div className="main">
			<div className="aside-container">
				<div className="aside-content"> </div>
			</div>
			<div  className="login-container">
				<Container className="card-container">
					<Card className="card"> 
						<Card.Body>
							<h2 className="text-center mb-3">{"Log In"}</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>{"Email"}</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Form.Group id="password">
									<Form.Label>{"Password"}</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>
								<Button disabled={loading} className="w-100 mt-3" type="submit">
									{"Log In"}
								</Button>
							</Form>
							<div className="w-100 text-center mt-3">
								<Link to="/forgot-password">{"Forgot Password"}</Link>
							</div>
						</Card.Body>
					</Card>
				</Container>
				<div className="w-100 text-center mt-2 linkdown card-links">
					{"Don't have an account?"} <Link to="/signup">{"Sign Up"}</Link>
				</div>
			</div>
		</div>
	);
}
