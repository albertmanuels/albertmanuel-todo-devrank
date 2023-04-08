import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailPages from "./pages/Details";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/activity-detail/:id" element={<DetailPages />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
