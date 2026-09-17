import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import ProtectedRoute from "./ProtectedRoutes";
import ProfilePage from "../pages/ProfilePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
