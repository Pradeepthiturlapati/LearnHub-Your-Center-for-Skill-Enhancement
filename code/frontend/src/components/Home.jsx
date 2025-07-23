import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Redirect to dashboard if logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #4e73df 0%, #a7bfe8 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: "88px" // <-- Add this line (navbar height + some space)
    }}>
      {/* Decorative Circles */}
      <div style={{
        position: "absolute",
        top: -80,
        left: -80,
        width: 220,
        height: 220,
        background: "rgba(255,213,79,0.18)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: -100,
        right: -100,
        width: 260,
        height: 260,
        background: "rgba(67,233,123,0.15)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      {/* Hero Section */}
      <div style={{ textAlign: "center", zIndex: 2, marginTop: 48 }}>
        <h1 style={{
          color: "#fff",
          fontWeight: 900,
          fontSize: "3.2rem",
          marginBottom: 24,
          letterSpacing: "-2px",
          textShadow: "0 2px 16px #4e73df55"
        }}>
          Welcome to <span style={{
            color: "#ffd54f",
            textShadow: "0 2px 8px #ffd54f55"
          }}>Learnhub</span>
        </h1>
        <p style={{
          color: "#e0e7ef",
          fontSize: "1.3rem",
          marginBottom: 38,
          fontWeight: 500,
          textShadow: "0 2px 8px #4e73df22"
        }}>
          Discover, learn, and grow with top courses from expert instructors.
        </p>
        <button
          style={{
            background: "linear-gradient(90deg, #ffd54f 0%, #43e97b 100%)",
            color: "#2d2d2d",
            border: "none",
            borderRadius: 32,
            padding: "22px 64px",
            fontWeight: 800,
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 6px 24px #ffd54f55",
            transition: "transform 0.2s, box-shadow 0.2s",
            outline: "none",
            marginTop: 12,
            animation: "pulse 1.5s infinite"
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "scale(1.07)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "none"; }}
          onClick={() => setShowModal(true)}
        >
          🚀 Get Started
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        display: "flex",
        gap: 36,
        justifyContent: "center",
        marginTop: 64,
        marginBottom: 32,
        flexWrap: "wrap",
        zIndex: 2
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 8px #e0e7ef",
          padding: "28px 24px",
          minWidth: 220,
          textAlign: "center"
        }}>
          <span role="img" aria-label="courses" style={{ fontSize: "2rem" }}>📚</span>
          <div style={{ fontWeight: 700, marginTop: 12 }}>1000+ Courses</div>
          <div style={{ color: "#475569", fontSize: "1rem", marginTop: 6 }}>Wide range of topics</div>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 8px #e0e7ef",
          padding: "28px 24px",
          minWidth: 220,
          textAlign: "center"
        }}>
          <span role="img" aria-label="instructors" style={{ fontSize: "2rem" }}>👩‍🏫</span>
          <div style={{ fontWeight: 700, marginTop: 12 }}>Expert Instructors</div>
          <div style={{ color: "#475569", fontSize: "1rem", marginTop: 6 }}>Learn from the best</div>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 8px #e0e7ef",
          padding: "28px 24px",
          minWidth: 220,
          textAlign: "center"
        }}>
          <span role="img" aria-label="certificate" style={{ fontSize: "2rem" }}>🎓</span>
          <div style={{ fontWeight: 700, marginTop: 12 }}>Certificates</div>
          <div style={{ color: "#475569", fontSize: "1rem", marginTop: 6 }}>Showcase your skills</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 2px 8px #e0e7ef",
        padding: "32px 28px",
        maxWidth: 700,
        margin: "0 auto 48px auto",
        textAlign: "center",
        zIndex: 2
      }}>
        <h3 style={{ color: "#2563eb", fontWeight: 800, marginBottom: 18 }}>What Our Learners Say</h3>
        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <div style={{ maxWidth: 200 }}>
            <div style={{ fontStyle: "italic", color: "#475569" }}>
              “Learnhub helped me land my dream job!”
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, color: "#43e97b" }}>— Priya S.</div>
          </div>
          <div style={{ maxWidth: 200 }}>
            <div style={{ fontStyle: "italic", color: "#475569" }}>
              “The courses are practical and easy to follow.”
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, color: "#2563eb" }}>— Michael T.</div>
          </div>
          <div style={{ maxWidth: 200 }}>
            <div style={{ fontStyle: "italic", color: "#475569" }}>
              “I love the certificates and the instructors!”
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, color: "#ffd54f" }}>— Fatima R.</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(30, 50, 70, 0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 24,
            padding: "56px 44px",
            boxShadow: "0 8px 32px #4e73df33",
            textAlign: "center",
            minWidth: 340,
            position: "relative"
          }}>
            <h2 style={{
              marginBottom: 28,
              color: "#4e73df",
              fontWeight: 800,
              fontSize: "2rem"
            }}>
              Welcome!
            </h2>
            <p style={{
              color: "#475569",
              fontSize: "1.1rem",
              marginBottom: 32
            }}>
              Please login or sign up to continue your learning journey.
            </p>
            <button
              style={{
                background: "linear-gradient(90deg, #4e73df 0%, #60a5fa 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "14px 38px",
                fontWeight: 700,
                fontSize: "1.15rem",
                marginRight: 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px #4e73df22",
                transition: "background 0.2s"
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              style={{
                background: "linear-gradient(90deg, #43e97b 0%, #38b2ac 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "14px 38px",
                fontWeight: 700,
                fontSize: "1.15rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #43e97b22",
                transition: "background 0.2s"
              }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
            <div style={{ marginTop: 32 }}>
              <button
                style={{
                  background: "none",
                  color: "#888",
                  border: "none",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for button animation */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 #ffd54f55; }
            70% { box-shadow: 0 0 0 18px rgba(255,213,79,0); }
            100% { box-shadow: 0 0 0 0 rgba(255,213,79,0); }
          }
        `}
      </style>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        padding: "24px 0",
        color: "#64748b",
        fontSize: "1rem",
        textAlign: "center",
        zIndex: 2
      }}>
        &copy; {new Date().getFullYear()} Learnhub. All rights reserved.
      </div>
    </div>
  );
}