import { AuthProvider } from "./Contexts/AuthContext";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Routes>
						<Route element={<ProtectedRoute />}>
							<Route path="/" element={<Dashboard />} />
						</Route>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
		 					<Route path="/forgot-password" element={<ForgotPassword />} />
					</Routes>
				</AuthProvider>
			</Router>
		</>	
	);
}

export default App;
