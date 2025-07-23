import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("fullName", data.fullName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("userType", data.userType);
        localStorage.setItem("username", data.username);
        localStorage.setItem("joined", data.joined || new Date().toLocaleDateString());
        window.dispatchEvent(new Event("userChanged"));
        setMessage("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch {
      setMessage("Login failed");
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
            maxWidth: 400,
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
              Sign In
            </Typography>
          </div>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username or Email"
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
              SIGN IN
            </Button>
          </form>
          <Typography color={message.includes("successful") ? "primary" : "error"} align="center" style={{ marginTop: 10 }}>
            {message}
          </Typography>
          <Typography align="center" style={{ marginTop: 16, color: "#4e73df" }}>
            Don't have an account? <Link to="/register" style={{ color: "#2e59d9", fontWeight: 700 }}>Sign Up</Link>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}