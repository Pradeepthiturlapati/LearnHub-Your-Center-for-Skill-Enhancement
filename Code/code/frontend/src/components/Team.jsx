import React from "react";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Lead Instructor",
    bio: "Priya brings 10+ years of teaching experience and a passion for helping students succeed.",
    avatar: "👩‍🏫"
  },
  {
    name: "Michael Thompson",
    role: "Full Stack Developer",
    bio: "Michael builds seamless learning experiences and loves solving tech challenges.",
    avatar: "👨‍💻"
  },
  {
    name: "Fatima Rahman",
    role: "Course Designer",
    bio: "Fatima creates engaging course content and interactive learning modules.",
    avatar: "📝"
  },
  {
    name: "Alex Chen",
    role: "Support Specialist",
    bio: "Alex ensures every learner gets the help and guidance they need.",
    avatar: "💬"
  }
];

export default function Team() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #43e97b 0%, #38b2ac 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 80
    }}>
      <h1 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#fff", marginBottom: 24 }}>
        Meet the Team
      </h1>
      <p style={{ maxWidth: 600, color: "#e0e7ef", fontSize: "1.2rem", textAlign: "center" }}>
        Our passionate team of educators, developers, and designers is here to support your learning journey.
      </p>
      <div style={{
        display: "flex",
        gap: 32,
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 40
      }}>
        {teamMembers.map(member => (
          <div key={member.name} style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #e0e7ef",
            padding: "28px 24px",
            minWidth: 220,
            maxWidth: 260,
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{member.avatar}</div>
            <div style={{ fontWeight: 700, fontSize: "1.15rem", color: "#2563eb" }}>{member.name}</div>
            <div style={{ color: "#43e97b", fontWeight: 600, marginBottom: 8 }}>{member.role}</div>
            <div style={{ color: "#475569", fontSize: "1rem" }}>{member.bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}