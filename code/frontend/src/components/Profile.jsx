import React from "react";

export default function Profile() {
  // Get all user info from localStorage
  const fullName = localStorage.getItem("fullName") || "Your Name";
  const email = localStorage.getItem("email") || "your@email.com";
  const userType = localStorage.getItem("userType") || "student";
  const phone = localStorage.getItem("phone") || "Not provided";
  const joined = localStorage.getItem("joined") || "July 2025";
  const bio = localStorage.getItem("bio") || "No bio available.";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #a7bfe8 0%, #f4f7fa 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 4px 16px #a7bfe822",
          padding: "40px 32px",
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              fontSize: "4rem",
              background: "#e0e7ef",
              borderRadius: "50%",
              padding: "16px",
              color: "#2563eb",
              display: "inline-block",
            }}
            role="img"
            aria-label="User"
          >
            👤
          </span>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "2rem", color: "#2563eb", marginBottom: 8 }}>
          {fullName}
        </h2>
        <div style={{ color: "#475569", fontSize: "1.1rem", marginBottom: 8 }}>
          <strong>Email:</strong> {email}
        </div>
        <div style={{ color: "#475569", fontSize: "1.1rem", marginBottom: 8 }}>
          <strong>Phone:</strong> {phone}
        </div>
        <div style={{ color: "#475569", fontSize: "1.1rem", marginBottom: 8 }}>
          <strong>Joined:</strong> {joined}
        </div>
        <div
          style={{
            background: "#ffd54f",
            color: "#2d2d2d",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 700,
            fontSize: "1rem",
            display: "inline-block",
            marginBottom: 18,
          }}
        >
          {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </div>
        <div style={{ color: "#64748b", fontSize: "1rem", marginTop: 18 }}>
          <strong>Bio:</strong> {bio}
        </div>
      </div>
    </div>
  );
}