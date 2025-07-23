import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Certificate({ course, user }) {
  const certRef = useRef(null);

  const userName =
    (user && user.name) ||
    localStorage.getItem("fullName") ||
    "Name of Recipient";

  const displayCourse = course || {
    title: "React for Beginners",
    institute: "LearnHub Institute",
    description: "for the exceptional performance that led to the successful completion of",
    signature: "Priya Sharma",
    signatureRole: "Signature",
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [certRef.current.offsetWidth, certRef.current.offsetHeight],
    });
    pdf.addImage(imgData, "PNG", 0, 0, certRef.current.offsetWidth, certRef.current.offsetHeight);
    pdf.save("certificate.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <div ref={certRef}
        style={{
          background: "#fff",
          border: "6px solid #222",
          borderRadius: 16,
          boxSizing: "border-box",
          width: "900px",
          maxWidth: "98vw",
          padding: "48px 36px 36px 36px",
          position: "relative",
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        {/* Dotted inner border */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            right: 18,
            bottom: 18,
            border: "2px dotted #222",
            borderRadius: 10,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Title */}
          <h1
            style={{
              fontFamily: "'Old English Text MT', 'Georgia', serif",
              fontSize: "3.2rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 32,
              marginTop: 12,
              color: "#222",
              letterSpacing: "2px",
            }}
          >
            Certificate of Completion
          </h1>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "1.15rem",
              color: "#222",
              textAlign: "center",
              marginBottom: 24,
              marginTop: 8,
            }}
          >
            This certificate is hereby bestowed upon
          </div>

          {/* Recipient Name */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
            <div
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "2.1rem",
                color: "#222",
                fontWeight: 700,
                borderBottom: "2px solid #222",
                minWidth: 320,
                paddingBottom: 4,
                textAlign: "center",
                display: "inline-block",
              }}
            >
              {userName}
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "1.15rem",
              color: "#222",
              textAlign: "center",
              margin: "24px 0 8px 0",
            }}
          >
            {displayCourse.description}
          </div>

          {/* Institute and Course */}
          <div
            style={{
              fontSize: "1.25rem",
              color: "#222",
              textAlign: "center",
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            {displayCourse.institute}'s {displayCourse.title}
          </div>

          {/* Institute logo/info and Signature (bottom row) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
              marginTop: 64,
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            {/* Institute logo and info */}
            <div style={{ textAlign: "left", maxWidth: 220 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 6, color: "#222" }}>🎓</div>
              <div style={{ fontWeight: 700, color: "#222", fontSize: "1.1rem" }}>
                {displayCourse.institute}
              </div>
              <div style={{ color: "#666", fontSize: "0.95rem", marginTop: 4 }}>
                Learnhub
              </div>
            </div>
            {/* Signature */}
            <div style={{ textAlign: "center", width: 180 }}>
              <div
                style={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: "1.6rem",
                  color: "#222",
                  marginBottom: 8,
                }}
              >
                {displayCourse.signature}
              </div>
              <div style={{ color: "#222", fontSize: "1.1rem" }}>
                {displayCourse.signatureRole}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        style={{
          marginTop: 32,
          background: "#222",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
}