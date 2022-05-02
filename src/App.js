import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pokemon/:name" element={<DetailsPage />} />
			</Routes>
		</div>
	);
}
export default App;
