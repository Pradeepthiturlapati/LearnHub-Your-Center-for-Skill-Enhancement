**LearnHub--Your-Center-for-Skill-Enhancement**

**Project Documentation**
[https://drive.google.com/drive/folders/1nEx7v7qNrgIgubbuIZ5EiKFMdU11Fy8e]

**Video Link**
[https://drive.google.com/file/d/1MiEVk_fjp2jwZ0igx-8Z1A3zqA9FYSlY/view?usp=drivesdk]
# LearnHub - Online Learning Platform

## Overview

**LearnHub** is a modern online learning platform built with React, Node.js, and MongoDB. It allows users to browse, enroll in, and complete courses, as well as receive a downloadable certificate upon completion. The UI features a clean, modern design for an engaging user experience.

---

## Features

- **User Authentication:** Register and log in securely.
- **Profile Management:** View and update your personal information.
- **Course Management:** Browse all, new, and trending courses.
- **Course Details:** View detailed information about each course.
- **Enrollment:** Enroll in courses and track your progress.
- **Certificate Generation:** Download a personalized certificate after course completion (only for enrolled/completed courses).
- **Support Page:** Contact support for help or feedback.
- **Blog, Team, FAQ, About, Contact:** Informational and community pages.
- **Responsive Design:** Works well on desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React, React Router, Material UI, Ant Design Icons, html2canvas
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** Inline CSS with modern gradients and glassmorphism accents

---

## Folder Structure

```
LearnHub-Online-Learning-Platform/
│
├── Project_Files/
│   ├── backend/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── server.js
│   │   └── ...other backend files
│   └── frontend/
│       ├── public/
│       └── src/
│           ├── assets/
│           ├── components/
│           │   ├── Auth/
│           │   ├── Courses/
│           │   ├── Blog.jsx
│           │   ├── Team.jsx
│           │   ├── FAQ.jsx
│           │   ├── About.jsx
│           │   ├── Contact.jsx
│           │   ├── Profile.jsx
│           │   ├── Certificate.jsx
│           │   ├── Support.jsx
│           │   ├── Navbar.jsx
│           │   └── Home.jsx
│           ├── App.jsx
│           ├── index.js
│           └── ...other frontend files
└── Document/
    └── README.md
```

---

## How to Run

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/LearnHub-Online-Learning-Platform.git
   cd LearnHub-Online-Learning-Platform
   ```

2. **Install dependencies:**
   - For frontend:
     ```
     cd Project_Files/frontend
     npm install
     ```
   - For backend:
     ```
     cd ../backend
     npm install
     ```

3. **Start the backend server:**
   ```
   npm start
   ```

4. **Start the frontend app:**
   ```
   cd ../frontend
   npm start
   ```

5. **Open in browser:**
   ```
   http://localhost:5173
   ```

---

## Key Components

- **Navbar:** Navigation bar, conditionally hidden on certain pages.
- **Home:** Landing page with navigation to courses and support.
- **Courses:** List, detail, add, trending, and new courses.
- **CourseDetail:** Detailed course info, enrollment, and certificate access.
- **Profile:** User profile page showing all personal info.
- **Certificate:** Printable/downloadable certificate (only for enrolled/completed courses).
- **Support:** Contact form for user support.
- **Blog, Team, FAQ, About, Contact:** Informational and community pages.

---

## Certificate Download

- After enrolling and completing a course, users can click "Get Certificate" to view their certificate.
- The certificate displays the user's name (from localStorage or login) and course details.
- Users can download the certificate as a PDF using the "Download PDF" button.

---

## Customization

- **Add new courses:** Use the Add Course page.
- **Change colors or styles:** Edit inline styles in component files.
- **Backend endpoints:** Update or add Express routes as needed.

---

## Credits

- UI inspired by modern glassmorphism and clean design trends.
- Certificate template inspired by classic award certificates.

---
