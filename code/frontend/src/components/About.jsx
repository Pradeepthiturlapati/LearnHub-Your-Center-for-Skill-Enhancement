import React from "react";

export default function About() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #a7bfe8 0%, #f4f7fa 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 80
    }}>
      <h1 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#2563eb", marginBottom: 24 }}>
        About LearnHub
      </h1>
      <p style={{ maxWidth: 600, color: "#475569", fontSize: "1.2rem", textAlign: "center" }}>
        LearnHub is an online learning platform dedicated to helping you grow your skills and career.
        We offer a wide range of courses, expert instructors, and a supportive community.
        Our mission is to make learning accessible, engaging, and rewarding for everyone.
      </p>
    </div>
  );
}