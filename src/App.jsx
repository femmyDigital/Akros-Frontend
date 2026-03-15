import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeLandingPage from "./pages/home";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import AuthLayout from "./components/auth/layout";
import UserDashboard from "./pages/user/dashboard";
import UserAirtime from "./pages/user/airtime";
import UserData from "./pages/user/data";
import UserTv from "./pages/user/tv";
import UserElectric from "./pages/user/electric";
import UserHistory from "./pages/user/history";
import UserHelp from "./pages/user/help";
import UserLayout from "./components/user/layout";
import UserAtc from "./pages/user/atc";
import CheckAuth from "./components/common/checkAuth";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminHistory from "./pages/admin/history";
import AdminNotification from "./pages/admin/notification";
import AdminTransaction from "./pages/admin/transaction";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./pages/notFound";
import UnAuthPage from "./pages/unauthPage";
import AdminHelp from "./pages/admin/help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLandingPage />} />
        {/* Auth */}
        <Route
          path="/auth"
          element={
            <CheckAuth>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>

        {/* User */}
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route
            path="/user"
            element={
              <CheckAuth>
                <UserLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="airtime" element={<UserAirtime />} />
            <Route path="data" element={<UserData />} />
            <Route path="tv" element={<UserTv />} />
            <Route path="electric" element={<UserElectric />} />
            <Route path="atc" element={<UserAtc />} />
            <Route path="history" element={<UserHistory />} />
            <Route path="help" element={<UserHelp />} />
          </Route>
        </Route>

        {/* Admin */}

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route
            path="/admin"
            element={
              <CheckAuth>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="history" element={<AdminHistory />} />
            <Route path="notification" element={<AdminNotification />} />
            <Route path="help" element={<AdminHelp />} />
            <Route path="transaction" element={<AdminTransaction />} />
          </Route>
        </Route>

        <Route path="/unauthPage" element={<UnAuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
