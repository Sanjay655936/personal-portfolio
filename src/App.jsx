
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { checkAdminSession } from "./features/auth/authSlice";

import "./App.css";

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Sanjay Nemalapuri. All Rights Reserved.</p>
      </footer>
    </>
  );
}

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, checked } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(checkAdminSession());
  }, [dispatch]);

  if (!checked) {
    return <p>Checking login session...</p>;
  }

  return (
    <Routes>
      {/* First page */}
      <Route
        path="/"
        element={
          isAuthenticated
            ? <Portfolio />
            : <Navigate to="/admin/login" replace />
        }
      />

      {/* Admin login */}
      <Route
        path="/admin/login"
        element={
          isAuthenticated
            ? <Navigate to="/" replace />
            : <AdminLogin />
        }
      />

      {/* Protected admin dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />
      </Route>

      {/* Unknown URLs */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
