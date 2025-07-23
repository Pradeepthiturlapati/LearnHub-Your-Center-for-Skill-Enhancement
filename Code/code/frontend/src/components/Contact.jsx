import React from "react";

export default function Contact() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #a7bfe8 0%, #43e97b 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 80
    }}>
      <h1 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#f4f7fa", marginBottom: 24 }}>
        Contact Us
      </h1>
      <p style={{ maxWidth: 600, color: "#475569", fontSize: "1.2rem", textAlign: "center" }}>
        Have questions or feedback? Reach out to us!
      </p>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 8px #e0e7ef",
        padding: "32px 28px",
        maxWidth: 400,
        marginTop: 24
      }}>
        <div style={{ marginBottom: 12 }}>
          <strong>Email:</strong> support@learnhub.com
        </div>
        <div>
          <strong>Phone:</strong> +1-234-567-890
        </div>
      </div>
    </div>
  );
}