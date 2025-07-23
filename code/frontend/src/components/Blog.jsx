import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Succeed in Online Learning",
    date: "July 2025",
    author: "Team LearnHub",
    excerpt: "Discover proven strategies to stay motivated, organized, and productive in your online courses.",
    content: "Online learning offers flexibility and convenience, but it also requires discipline. Here are five tips to help you succeed: 1) Set clear goals, 2) Create a study schedule, 3) Participate in discussions, 4) Take regular breaks, 5) Celebrate your achievements."
  },
  {
    id: 2,
    title: "How Certificates Boost Your Career",
    date: "June 2025",
    author: "Priya S.",
    excerpt: "Learn why earning certificates from online courses can make a difference in your job search and professional growth.",
    content: "Certificates validate your skills and show employers your commitment to learning. They can help you stand out, qualify for promotions, and build confidence in your expertise."
  },
  {
    id: 3,
    title: "Meet Our Top Instructors",
    date: "May 2025",
    author: "Michael T.",
    excerpt: "Get to know the passionate educators who make LearnHub a great place to learn.",
    content: "Our instructors bring real-world experience and a love for teaching. Read their stories and discover what inspires them to help students succeed."
  }
];

export default function Blog() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 80
    }}>
      <h1 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#6a4bc6", marginBottom: 24 }}>
        Blog
      </h1>
      <p style={{ maxWidth: 600, color: "#475569", fontSize: "1.2rem", textAlign: "center" }}>
        Stay tuned for articles, tips, and updates from the LearnHub team!
      </p>
      <div style={{
        maxWidth: 700,
        width: "100%",
        marginTop: 32,
        display: "flex",
        flexDirection: "column",
        gap: 32
      }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 2px 8px #e0e7ef",
            padding: "28px 24px"
          }}>
            <h2 style={{ color: "#2563eb", fontWeight: 700, marginBottom: 8 }}>{post.title}</h2>
            <div style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: 8 }}>
              {post.date} &nbsp;|&nbsp; {post.author}
            </div>
            <p style={{ color: "#475569", fontSize: "1.1rem", marginBottom: 10 }}>
              {post.excerpt}
            </p>
            <div style={{ color: "#334155", fontSize: "1rem" }}>
              {post.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}