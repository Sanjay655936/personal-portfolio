import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../features/auth/authSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admin = useSelector(
    (state) => state.auth.admin
  );

  const handleLogout = async () => {
    try {
      await dispatch(logoutAdmin()).unwrap();
    } finally {
      navigate("/admin/login");
    }
  };

  return (
    <section className="section">
      <h2>Admin Dashboard</h2>

      <h3>Welcome, {admin?.name}</h3>

      <p>Email: {admin?.email}</p>

      <p>
        Manage your Personal Portfolio Website here.
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}