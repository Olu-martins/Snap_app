import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

import { useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero-Section/HeroSection";
import Courses from "../Components/Courses-section/Courses";

import Footer from "../Components/Footer/Footer";
// import '../index.css'

export default function Dashboard() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			navigate("/login");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
			<div className="w-100" style={{ color: "green", marginLeft: "1240px", alignContent:'end', justifyContent:'flex-start' }}>
				<div>
					{/* <h1 className="text-center mb-3">{"User Profile"}</h1> */}
					{error && <Alert variant="danger">{error}</Alert>}
					<strong>{"User Logged In:"}</strong> {currentUser.email}
					{/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
						{"Update Profile"}
					</Link> */}
					<Button variant="link" onClick={handleLogout}>
						{"Log out"}
					</Button>
				</div>
			</div>
			<Header />
			<HeroSection />

			<Courses />

			<Footer />
		</>
	);
}
