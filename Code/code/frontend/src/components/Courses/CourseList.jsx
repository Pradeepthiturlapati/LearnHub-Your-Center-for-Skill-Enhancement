import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const categories = ["All", "Frontend", "Backend", "Fullstack", "Design"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || (course.category && course.category === filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f9fb",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
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
          border: "1.5px solid #dbeafe",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px #e0e7ef",
          cursor: "pointer",
          zIndex: 20,
          transition: "box-shadow 0.2s, border 0.2s",
        }}
        aria-label="Go Back"
        title="Go Back"
        onMouseOver={e => {
          e.currentTarget.style.boxShadow = "0 4px 16px #b6c6e6";
          e.currentTarget.style.border = "1.5px solid #60a5fa";
        }}
        onMouseOut={e => {
          e.currentTarget.style.boxShadow = "0 2px 8px #e0e7ef";
          e.currentTarget.style.border = "1.5px solid #dbeafe";
        }}
      >
        <ArrowLeftOutlined style={{ fontSize: 22, color: "#60a5fa" }} />
      </button>
      <h1
        style={{
          color: "#1e293b",
          fontWeight: 800,
          fontSize: "2.3rem",
          marginTop: 64,
          marginBottom: 48,
          textAlign: "center",
          letterSpacing: "-1px",
        }}
      >
        All Courses
      </h1>
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 40,
          width: "90%",
          maxWidth: 900,
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: 15,
            borderRadius: 8,
            border: "1.5px solid #dbeafe",
            fontSize: 18,
            minWidth: "300px",
            background: "#fff",
            color: "#1e293b",
            outline: "none",
            boxShadow: "0 2px 8px #e0e7ef",
          }}
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1.5px solid #bae6fd",
            fontSize: 16,
            minWidth: "150px",
            background: "#fff",
            color: "#0284c7",
            outline: "none",
            boxShadow: "0 2px 8px #e0e7ef",
          }}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          width: "90%",
          maxWidth: 1200,
          margin: "0 auto",
          marginBottom: 48,
        }}
      >
        {filteredCourses.length === 0 ? (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              color: "#888",
              fontSize: 18,
            }}
          >
            No courses found.
          </div>
        ) : (
          filteredCourses.map(course => (
            <div
              key={course._id}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 16px 0 #e0e7ef",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                border: "1.5px solid #e0e7ef",
                minHeight: 220,
                color: "#1e293b",
                transition: "transform 0.18s, box-shadow 0.18s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 8px 32px 0 #c7d2fe";
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 16px 0 #e0e7ef";
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.18rem",
                  marginBottom: 6,
                  color: "#2563eb",
                  letterSpacing: "-0.5px",
                }}
              >
                {course.title.replace("React", "ReactJS").replace("Python", "Python 3")}
              </div>
              <div style={{ marginBottom: 4, color: "#64748b", fontWeight: 500 }}>
                Instructor: {course.instructor}
              </div>
              <div style={{ marginBottom: 4, color: "#0284c7", fontSize: 15, fontWeight: 600 }}>
                {course.category}
              </div>
              <div style={{ marginBottom: 4, color: "#475569", fontSize: 15 }}>
                <span role="img" aria-label="students">👥</span> {course.students || "N/A"} students
              </div>
              <div style={{ marginBottom: 4, color: "#fbbf24", fontSize: 15 }}>
                <span role="img" aria-label="rating">⭐</span> {course.rating || "N/A"}
              </div>
              <div style={{ marginBottom: 4, fontWeight: 600, color: "#2563eb", fontSize: 16 }}>
                {course.price ? course.price : ""}
              </div>
              <div style={{ marginBottom: 8, color: "#334155", fontSize: 15 }}>
                {course.description}
              </div>
              <ul style={{ paddingLeft: 18, margin: "6px 0 0 0", color: "#0284c7", fontSize: 15 }}>
                {course.features &&
                  course.features.map((f, i) => (
                    <li key={i} style={{ marginBottom: 2 }}>{f}</li>
                  ))}
              </ul>
              <a
                href={`/courses/all/${course._id}`}
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  background: "#2563eb",
                  color: "#fff",
                  padding: "10px 22px",
                  borderRadius: 7,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: "0 2px 8px #2563eb22",
                  letterSpacing: "0.5px",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                View Details
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}