import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function AddCourse({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, instructor }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Course added!");
        setTitle("");
        setDescription("");
        setInstructor("");
      } else {
        setMessage(data.message || "Failed to add course");
      }
    } catch {
      setMessage("Failed to add course");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f9fb",
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
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 16px 0 #e0e7ef",
          padding: "40px 32px 32px 32px",
          border: "1.5px solid #e0e7ef",
          color: "#1e293b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{
            color: "#2563eb",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Add a New Course
        </Typography>
        <form onSubmit={handleAddCourse}>
          <TextField
            label="Course Title"
            fullWidth
            margin="normal"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            InputProps={{
              style: { color: "#1e293b", background: "#f7f9fb", borderRadius: 8 }
            }}
            InputLabelProps={{
              style: { color: "#2563eb" }
            }}
          />
          <TextField
            label="Course Description"
            fullWidth
            margin="normal"
            value={description}
            onChange={e => setDescription(e.target.value)}
            InputProps={{
              style: { color: "#1e293b", background: "#f7f9fb", borderRadius: 8 }
            }}
            InputLabelProps={{
              style: { color: "#2563eb" }
            }}
          />
          <TextField
            label="Instructor"
            fullWidth
            margin="normal"
            value={instructor}
            onChange={e => setInstructor(e.target.value)}
            InputProps={{
              style: { color: "#1e293b", background: "#f7f9fb", borderRadius: 8 }
            }}
            InputLabelProps={{
              style: { color: "#2563eb" }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              marginTop: 24,
              background: "#2563eb",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: 8,
              boxShadow: "0 2px 8px 0 #2563eb22",
              padding: "12px 0",
              letterSpacing: "0.5px",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Add Course
          </Button>
        </form>
        <Typography
          align="center"
          style={{
            marginTop: 16,
            color: message.includes("added") ? "#2563eb" : "#e53935",
            fontWeight: 600,
            fontSize: "1.1rem",
            minHeight: 24,
          }}
        >
          {message}
        </Typography>
      </div>
    </div>
  );
}