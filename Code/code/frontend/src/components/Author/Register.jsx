import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Paper, Typography, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          userType: userType.charAt(0).toUpperCase() + userType.slice(1)
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful! Please login.");
        window.dispatchEvent(new Event("userChanged"));
        localStorage.setItem("token", data.token); // or whatever your token is

        // Save user info to localStorage for profile display
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("userType", userType.charAt(0).toUpperCase() + userType.slice(1));
        localStorage.setItem("username", username);
        localStorage.setItem("joined", new Date().toLocaleDateString());
        // Add more fields if needed

        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch {
      setMessage("Registration failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #4e73df 0%, #a7bfe8 100%), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Paper
          elevation={10}
          style={{
            padding: 38,
            maxWidth: 420,
            width: "100%",
            borderRadius: 26,
            background: "#fff",
            boxShadow: "0 8px 32px 0 rgba(78,115,223,0.13)",
            marginTop: 80,
            border: "1.5px solid #e3e8f7",
            color: "#2d2d2d",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 8 }}>
            <div
              style={{
                background: "linear-gradient(135deg, #4e73df 0%, #a7bfe8 100%)",
                borderRadius: "50%",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                boxShadow: "0 2px 8px #4e73df33",
              }}
            >
              <AccountCircle style={{ fontSize: 42, color: "#fff" }} />
            </div>
            <Typography variant="h6" style={{ marginTop: 6, fontWeight: 800, color: "#4e73df", letterSpacing: 1 }}>
              Register
            </Typography>
          </div>
          <form onSubmit={handleRegister}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
              InputProps={{
                style: { color: "#2d2d2d" }
              }}
              InputLabelProps={{
                style: { color: "#4e73df" }
              }}
            />
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              InputProps={{
                style: { color: "#2d2d2d" }
              }}
              InputLabelProps={{
                style: { color: "#4e73df" }
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              InputProps={{
                style: { color: "#2d2d2d" }
              }}
              InputLabelProps={{
                style: { color: "#4e73df" }
              }}
            />
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              InputProps={{
                style: { color: "#2d2d2d" }
              }}
              InputLabelProps={{
                style: { color: "#4e73df" }
              }}
            />
            <TextField
              select
              label="Select User"
              margin="normal"
              value={userType}
              onChange={e => setUserType(e.target.value)}
              required
              style={{ width: "48%" }}
              InputProps={{
                style: { color: "#2d2d2d" }
              }}
              InputLabelProps={{
                style: { color: "#4e73df" }
              }}
            >
              <MenuItem value="">Select User</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" fullWidth style={{
              marginTop: 22,
              background: "linear-gradient(90deg, #4e73df 0%, #a7bfe8 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: 10,
              boxShadow: "0 2px 8px 0 #4e73df33",
              letterSpacing: 1,
            }}>
              Sign Up
            </Button>
          </form>
          <Typography color={message.includes("successful") ? "primary" : "error"} align="center" style={{ marginTop: 10 }}>
            {message}
          </Typography>
          <Typography align="center" style={{ marginTop: 16, color: "#4e73df" }}>
            Have an account? <Link to="/login" style={{ color: "#2e59d9", fontWeight: 700 }}>Sign In</Link>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}