import TrendingCourses from "./components/Courses/TrendingCourses";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CourseList from "./components/Courses/CourseList";
import AddCourse from "./components/Courses/AddCourse";
import NewCourses from "./components/Courses/NewCourses";
import AllCourses from "./components/Courses/AllCourses";
import CourseDetail from "./components/Courses/CourseDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Certificate from "./components/Certificate";
import Support from "./components/Support";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Blog from "./components/Blog";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

// Wrapper to use useLocation with BrowserRouter
function AppRoutes() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/courses/all",
    "/courses/new",
    "/courses/trending",
    "/support",
    "/certificate"
  ];
  const hideNavbar = hideNavbarRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/courses/trending" element={<TrendingCourses />} />
        <Route path="/courses/new" element={<NewCourses />} />
        <Route path="/courses/new/:id" element={<CourseDetail />} />
        <Route path="/courses/all" element={<AllCourses />} />
        <Route path="/courses/all/:id" element={<CourseDetail />} />
        <Route path="/courses/trending/:id" element={<CourseDetail />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}