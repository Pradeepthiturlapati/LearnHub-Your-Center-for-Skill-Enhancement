import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { sampleCourses } from "./sampleCourses";
import { trendingCourses } from "./TrendingCourses";
import { newCourses } from "./NewCourses";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  let course;
  if (location.pathname.startsWith("/courses/trending")) {
    course = trendingCourses.find(c => c.id === Number(id));
  } else if (location.pathname.startsWith("/courses/new")) {
    course = newCourses.find(c => c.id === Number(id));
  } else {
    course = sampleCourses.find(c => c.id === Number(id));
  }

  const requirements = course?.requirements || [
    "Basic computer knowledge",
    "No prior experience needed"
  ];
  const duration = course?.duration || "6 hours";
  const level = course?.level || "Beginner";
  const language = course?.language || "English";
  const whatYouWillLearn = course?.whatYouWillLearn || [
    "Build interactive UIs",
    "Understand components",
    "Manage state and props",
    "Create your first app"
  ];

  const [enrolled, setEnrolled] = useState(false);

  if (!course) return <div style={{ padding: 40, color: "#2563eb" }}>Course not found.</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f9fb",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "95vw",
          maxWidth: 1100,
          minHeight: "90vh",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 4px 16px #e0e7ef",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 0,
          overflow: "hidden",
          color: "#1e293b",
          border: "1.5px solid #e0e7ef",
        }}
      >
        {/* Left Column */}
        <div style={{
          background: "#f7f9fb",
          color: "#1e293b",
          borderRight: "1.5px solid #e0e7ef",
          padding: "48px 32px 32px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start"
        }}>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            style={{
              alignSelf: "flex-start",
              marginBottom: 32,
              background: "#fff",
              color: "#2563eb",
              border: "1.5px solid #dbeafe",
              borderRadius: 16,
              padding: "10px 28px 10px 18px",
              fontSize: 18,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px #e0e7ef",
              display: "flex",
              alignItems: "center",
              gap: 10,
              letterSpacing: 1,
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#e0e7ef"}
            onMouseOut={e => e.currentTarget.style.background = "#fff"}
          >
            <span style={{ fontSize: 20, marginRight: 6 }}>←</span>
            Go Back
          </button>
          <div style={{
            background: "#f1f5f9",
            borderRadius: 10,
            padding: 18,
            marginBottom: 18,
            fontSize: 22,
            fontWeight: 700,
            textAlign: "center",
            width: "100%",
            boxShadow: "0 2px 8px #e0e7ef"
          }}>
            {course.price ? `Price: ${course.price}` : "Free"}
          </div>
          <div style={{
            background: "#f1f5f9",
            borderRadius: 10,
            padding: 14,
            fontSize: 18,
            textAlign: "center",
            marginBottom: 14,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center"
          }}>
            <span role="img" aria-label="students">👥</span> {course.students.toLocaleString()} students
          </div>
          <div style={{
            background: "#f1f5f9",
            borderRadius: 10,
            padding: 14,
            fontSize: 18,
            textAlign: "center",
            marginBottom: 14,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center"
          }}>
            <span role="img" aria-label="duration">⏱</span> Duration: {duration}
          </div>
          <div style={{
            background: "#f1f5f9",
            borderRadius: 10,
            padding: 14,
            fontSize: 18,
            textAlign: "center",
            marginBottom: 14,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center"
          }}>
            <span role="img" aria-label="level">🏷</span> Level: {level}
          </div>
          <div style={{
            background: "#f1f5f9",
            borderRadius: 10,
            padding: 14,
            fontSize: 18,
            textAlign: "center",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center"
          }}>
            <span role="img" aria-label="language">🌐</span> Language: {language}
          </div>
        </div>

        {/* Right Column */}
        <div style={{
          padding: "0 0 0 0",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}>
          <div style={{
            padding: "40px 48px 32px 48px",
            flex: 1,
            overflowY: "auto"
          }}>
            <h1 style={{ margin: "0 0 12px 0", fontSize: 34, fontWeight: 800, color: "#2563eb" }}>
              {course.title.replace("React", "ReactJS").replace("Python", "Python 3")}
            </h1>
            <div style={{ color: "#0284c7", fontSize: 20, marginBottom: 8, fontWeight: 600 }}>
              By {course.instructor}
            </div>
            <div style={{ color: "#64748b", fontSize: 16, marginBottom: 12 }}>
              Category: {course.category}
            </div>
            <div style={{ fontSize: 18, marginBottom: 12 }}>
              Rating: <span style={{ color: "#fbbf24", fontWeight: 700 }}>⭐ {course.rating}</span>
            </div>
            <div style={{ marginBottom: 24, fontSize: 18, color: "#475569" }}>
              {course.description}
            </div>

            {/* Enrollment Section */}
            <div style={{
              background: "#f1f5f9",
              borderRadius: 10,
              padding: 24,
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxShadow: "0 2px 8px #e0e7ef"
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#2563eb", marginBottom: 12 }}>
                {enrolled ? "You are enrolled!" : "Enroll in this course"}
              </div>
              <button
                disabled={enrolled}
                onClick={() => setEnrolled(true)}
                style={{
                  background: enrolled ? "#cbd5e1" : "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 32px",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: enrolled ? "not-allowed" : "pointer",
                  boxShadow: "0 2px 8px #2563eb22",
                  transition: "background 0.2s"
                }}
              >
                {enrolled ? "Enrolled" : "Enroll Now"}
              </button>
              {enrolled && (
                <div style={{ color: "#0284c7", marginTop: 12, fontWeight: 600 }}>
                  🎉 Congratulations! You have enrolled in this course.
                </div>
              )}
            </div>

            {/* What you'll learn */}
            <div style={{
              background: "#f1f5f9",
              borderRadius: 10,
              padding: 18,
              marginBottom: 24,
              boxShadow: "0 2px 8px #e0e7ef"
            }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#2563eb" }}>What you'll learn</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {whatYouWillLearn.map((item, i) => (
                  <li key={i} style={{ marginBottom: 4, fontSize: 16 }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div style={{
              background: "#f1f5f9",
              borderRadius: 10,
              padding: 18,
              marginBottom: 24,
              boxShadow: "0 2px 8px #e0e7ef"
            }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#0284c7" }}>Requirements</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {requirements.map((req, i) => (
                  <li key={i} style={{ marginBottom: 4, fontSize: 16 }}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Certificate Button */}
            {enrolled && (
              <button
                onClick={() => navigate("/certificate")}
                style={{
                  marginTop: 24,
                  background: "#2563eb",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Get Certificate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}