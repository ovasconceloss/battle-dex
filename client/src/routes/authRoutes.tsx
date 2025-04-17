import Account from "@/pages/Account";
import { Routes, Route } from "react-router-dom";

const AuthRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Account />} />
        </Routes>
    );
};

export default AuthRoutes;