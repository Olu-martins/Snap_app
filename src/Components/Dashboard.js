import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import HeroSection from "./Hero-Section/HeroSection";
import Courses from "./Courses-section/Courses";
import Footer from "./Footer/Footer";
import "./Dashboard.css";
import { Interests } from "./Interests/Interests";
import Digitalskill from "./Digital-Skill/DigitalSkill";
import NewsTrend from "./WhatsNew/NewsTrend";

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
					{error && <Alert variant="danger">{error}</Alert>}
					<strong>{"User Logged In:"}</strong> {currentUser.email}
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
			<NewsTrend />
			<Footer />
		</>
	);
}
