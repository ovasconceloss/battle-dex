import Account from "@/pages/Account";
import { Routes, Route } from "react-router-dom";

const AuthRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account />} />
        </Routes>
    );
};

export default AuthRoutes;