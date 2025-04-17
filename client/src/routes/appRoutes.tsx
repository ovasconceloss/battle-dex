import AuthRoutes from "./authRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes />} />
            </Routes>
        </Router>
    )
};

export default App;