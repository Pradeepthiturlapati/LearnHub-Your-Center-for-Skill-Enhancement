import React from "react";

export default function FAQ() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #88d2ecff 0%, #8cd1ebff 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 80
    }}>
      <h1 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#f4f7fa", marginBottom: 24 }}>
        Frequently Asked Questions
      </h1>
      <div style={{ maxWidth: 700, color: "#475569", fontSize: "1.15rem" }}>
        <p><strong>Q: How do I enroll in a course?</strong><br />A: Browse courses and click "Enroll" on the course page.</p>
        <p><strong>Q: Can I get a certificate?</strong><br />A: Yes! Complete a course and download your certificate from your dashboard.</p>
        <p><strong>Q: How do I contact support?</strong><br />A: Use the Support page or email us at support@learnhub.com.</p>
      </div>
    </div>
  );
}