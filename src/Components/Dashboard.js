import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import HeroSection from "./Hero-Section/HeroSection";
import Courses from "./Courses-section/Courses";
import Footer from "./Footer/Footer";
import './Dashboard.css'
import { Interests } from "./Interests/Interests";
import Digitalskill from "./Digital-Skill/DigitalSkill";
// import Company from "./Company-section/Company";


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
			<div className="w-100">
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
			<Interests />
			<Digitalskill /> 					
			<Courses />
			<Footer />

		</>
	);
}
