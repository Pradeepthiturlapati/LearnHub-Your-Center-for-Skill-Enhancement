import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("");
    setTimeout(() => {
      setMessage("Thank you! Your support request has been submitted.");
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0e7ef 0%, #a7bfe8 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        paddingTop: 60,
      }}
    >
      {/* Back Arrow Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          background: "#fff",
          border: "1.5px solid #a7bfe8",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px #a7bfe822",
          cursor: "pointer",
          zIndex: 20,
          transition: "box-shadow 0.2s, border 0.2s",
        }}
        aria-label="Go Back"
        title="Go Back"
        onMouseOver={e => {
          e.currentTarget.style.boxShadow = "0 4px 16px #4e73df33";
          e.currentTarget.style.border = "1.5px solid #4e73df";
        }}
        onMouseOut={e => {
          e.currentTarget.style.boxShadow = "0 2px 8px #a7bfe822";
          e.currentTarget.style.border = "1.5px solid #a7bfe8";
        }}
      >
        <ArrowLeftOutlined style={{ fontSize: 22, color: "#4e73df" }} />
      </button>
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 8px 32px 0 #a7bfe822",
          padding: "40px 32px 32px 32px",
          borderTop: "4px solid #4e73df",
          borderLeft: "1.5px solid #a7bfe8",
          borderRight: "1.5px solid #e0e7ef",
          borderBottom: "1.5px solid #e0e7ef",
          color: "#1e293b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "-1px",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Support
        </h1>
        <p style={{ color: "#475569", marginBottom: 24, textAlign: "center" }}>
          Need help? Fill out the form below and our team will get back to you soon.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 8,
              border: "1.5px solid #a7bfe8",
              fontSize: 16,
              background: "#f4f7fa",
              color: "#1e293b",
              marginBottom: 16,
              outline: "none",
              boxShadow: "0 2px 8px #e0e7ef",
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 8,
              border: "1.5px solid #4e73df",
              fontSize: 16,
              background: "#f4f7fa",
              color: "#2563eb",
              marginBottom: 16,
              outline: "none",
              boxShadow: "0 2px 8px #e0e7ef",
            }}
          />
          <textarea
            placeholder="Describe your issue"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={5}
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 8,
              border: "1.5px solid #a7bfe8",
              fontSize: 16,
              background: "#f4f7fa",
              color: "#1e293b",
              marginBottom: 16,
              outline: "none",
              boxShadow: "0 2px 8px #e0e7ef",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            disabled={submitted}
            style={{
              width: "100%",
              marginTop: 8,
              background: "linear-gradient(90deg, #4e73df 0%, #a7bfe8 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: 8,
              border: "none",
              padding: "12px 0",
              boxShadow: "0 2px 8px 0 #4e73df22",
              letterSpacing: "0.5px",
              cursor: submitted ? "not-allowed" : "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {submitted ? "Submitted" : "Submit"}
          </button>
        </form>
        <div
          style={{
            marginTop: 16,
            color: "#2563eb",
            fontWeight: 600,
            fontSize: "1.1rem",
            minHeight: 24,
            textAlign: "center",
          }}
        >
          {message && submitted ? message : ""}
        </div>
      </div>
    </div>
  );
}