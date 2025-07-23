import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [fullName, setFullName] = useState(localStorage.getItem("fullName"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorage = () => setFullName(localStorage.getItem("fullName"));
    window.addEventListener("storage", handleStorage);
    window.addEventListener("userChanged", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("userChanged", handleStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("username");
    setFullName(null);
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        background: "transparent",
        height: "68px",
        boxShadow: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        borderBottom: "none",
      }}
    >
      {/* App Name */}
      <Link
        to="/"
        style={{
          fontWeight: 800,
          fontSize: "2rem",
          color: "#e0eaff",
          letterSpacing: "1px",
          textDecoration: "none",
          textShadow: "0 2px 8px #bccad8ff",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span role="img" aria-label="Graduation Cap" style={{ fontSize: "2.1rem", marginRight: 4 }}>🎓</span>
        LearnHub
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Link
          to="/"
          style={navLinkStyle}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={navLinkStyle}
        >
          About
        </Link>
        <Link
          to="/courses/all"
          style={navLinkStyle}
        >
          Courses
        </Link>
        <Link
          to="/support"
          style={navLinkStyle}
        >
          Support
        </Link>
        <Link
          to="/blog"
          style={navLinkStyle}
        >
          Blog
        </Link>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            style={{
              ...navLinkStyle,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              font: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            More <span style={{ fontSize: "1.1em" }}>▼</span>
          </button>
          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                left: 0,
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 4px 16px rgba(30,50,70,0.12)",
                minWidth: 140,
                zIndex: 1001,
                padding: "8px 0",
              }}
            >
              <Link to="/team" style={dropdownLinkStyle}>Team</Link>
              <Link to="/contact" style={dropdownLinkStyle}>Contact</Link>
              <Link to="/faq" style={dropdownLinkStyle}>FAQ</Link>
            </div>
          )}
        </div>
      </div>

      {/* User Info / Auth Links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {fullName ? (
          <>
            <span
              style={{
                marginRight: 18,
                fontWeight: 500,
                color: "#fff",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
                textShadow: "0 2px 8px #bccad8ff",
              }}
            >
              Welcome, {fullName}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "linear-gradient(90deg, #e53935 0%, #ff7675 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 22px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px 0 rgba(229,57,53,0.10)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #ff7675 0%, #e53935 100%)";
                e.target.style.transform = "scale(1.04)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #e53935 0%, #ff7675 100%)";
                e.target.style.transform = "scale(1)";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                marginRight: 18,
                fontWeight: 600,
                color: "#e0eaff",
                fontSize: "1.1rem",
                textDecoration: "none",
                padding: "7px 18px",
                borderRadius: 6,
                border: "1.5px solid #f4f7fa",
                background: "transparent",
                boxShadow: "0 2px 8px 0 rgba(67,233,123,0.10)",
                marginLeft: 2,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                fontWeight: 600,
                color: "#4e73df",
                fontSize: "1.1rem",
                textDecoration: "none",
                padding: "7px 18px",
                borderRadius: 6,
                background: "linear-gradient(90deg, #ffe082 0%, #ffd54f 100%)",
                boxShadow: "0 2px 8px 0 rgba(255,224,130,0.10)",
                marginLeft: 2,
                transition: "background 0.2s, color 0.2s",
                border: "none",
              }}
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// Styles for links
const navLinkStyle = {
  color: "#e0eaff",
  fontWeight: 600,
  fontSize: "1.15rem",
  textDecoration: "none",
  padding: "6px 18px",
  borderRadius: 6,
  transition: "background 0.2s, color 0.2s",
  position: "relative",
};

const dropdownLinkStyle = {
  display: "block",
  color: "#4e73df",
  fontWeight: 600,
  fontSize: "1rem",
  textDecoration: "none",
  padding: "10px 22px",
  borderRadius: 6,
  transition: "background 0.2s, color 0.2s",
  background: "none",
  margin: 0,
  cursor: "pointer",
};