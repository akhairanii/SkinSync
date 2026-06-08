import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutModal from "../components/modals/logoutModal";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("user_session"));
    if (session) setUser(session);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoutConfirm = () => {
    localStorage.removeItem("user_session");
    setIsLogoutOpen(false);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">
              <Link to="/">SkinSync</Link>
            </div>

            <div
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="nav-links">
              <Link to="/" className={isActive("/")}>Home</Link>
              <Link to="/skin-type" className={isActive("/skin-type")}>Skin Type</Link>
              <Link to="/tips" className={isActive("/tips")}>Tips</Link>

              {user && (
                <div className="user-menu">
                  <div className="user-info">
                    <span className="user-greeting">
                      Hi, {user?.fullName?.split(" ")[0]}!
                    </span>
                    <span className="user-role">
                      {user?.role || "User"}
                    </span>
                  </div>

                  <button
                    className="logout-btn"
                    onClick={() => setIsLogoutOpen(true)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
        </div>
      </nav>

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
