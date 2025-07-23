import React from "react";
import { Link } from "react-router-dom";

const dashboardCards = [
	{
		id: 1,
		title: "Trending Courses",
		description: "See what's popular right now.",
		icon: "🔥",
		color: "#2563eb",
		link: "/cpurses/trending",
		info: "Top picks",
	},
	{
		id: 2,
		title: "New Courses",
		description: "Check out the latest additions.",
		icon: "🆕",
		color: "#43e97b",
		link: "/courses/new",
		info: "Just launched",
	},
	{
		id: 3,
		title: "All Courses",
		description: "Browse our full catalog.",
		icon: "📚",
		color: "#fbbf24",
		link: "/courses/all",
		info: "Browse catalog",
	},
	{
		id: 4,
		title: "Certificates",
		description: "View and download your certificates.",
		icon: "🎓",
		color: "#6a4bc6",
		link: "/certificate",
		info: "Achievements",
	},
	{
		id: 5,
		title: "Support",
		description: "Get help and support.",
		icon: "💬",
		color: "#38b2ac",
		link: "/support",
		info: "We're here for you",
	},
	{
		id: 6,
		title: "Add Course",
		description: "Share your expertise.",
		icon: "➕",
		color: "#a6c1ee",
		link: "/add-course",
		info: "Become an instructor",
		teacherOnly: true, // Only for teachers
	},
];

export default function Dashboard() {
	const userType = localStorage.getItem("userType"); // "teacher" or "student"

	// Filter cards: show Add Course only for teachers
	const visibleCards = dashboardCards.filter(
		(card) => !card.teacherOnly || userType === "teacher"
	);

	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(120deg, #4e73df 0%, #a7bfe8 100%)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				paddingTop: "88px",
			}}
		>
			{/* Decorative Circles */}
			<div
				style={{
					position: "absolute",
					top: -80,
					left: -80,
					width: 220,
					height: 220,
					background: "rgba(255,213,79,0.18)",
					borderRadius: "50%",
					zIndex: 0,
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: -100,
					right: -100,
					width: 260,
					height: 260,
					background: "rgba(67,233,123,0.15)",
					borderRadius: "50%",
				zIndex: 0,
				}}
			/>

			{/* Hero Section */}
			<div style={{ textAlign: "center", zIndex: 2, marginTop: 48 }}>
				<h1
					style={{
						color: "#fff",
						fontWeight: 900,
						fontSize: "3.2rem",
						marginBottom: 24,
						letterSpacing: "-2px",
						textShadow: "0 2px 16px #4e73df55",
					}}
				>
					Your{" "}
					<span
						style={{
							color: "#ffd54f",
							textShadow: "0 2px 8px #ffd54f55",
						}}
					>
						Dashboard
					</span>
				</h1>
				<p
					style={{
						color: "#e0e7ef",
						fontSize: "1.3rem",
						marginBottom: 38,
						fontWeight: 500,
						textShadow: "0 2px 8px #4e73df22",
					}}
				>
					Track your progress, explore new courses, and unlock achievements!
				</p>
			</div>

			{/* Dashboard Feature Cards */}
			<div
				style={{
					display: "flex",
					gap: 36,
					justifyContent: "center",
					marginTop: 64,
					marginBottom: 32,
					flexWrap: "wrap",
					zIndex: 2,
				}}
			>
				{visibleCards.map((card) => (
					<Link
						to={card.link}
						key={card.id}
						style={{ textDecoration: "none" }}
					>
						<div
							style={{
								background: "#fff",
								borderRadius: 18,
								boxShadow: `0 2px 8px ${card.color}22`,
								padding: "28px 24px",
								minWidth: 220,
								textAlign: "center",
								transition: "transform 0.18s, box-shadow 0.18s",
								color: "#1e293b",
								position: "relative",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.transform = "scale(1.05)";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.transform = "none";
							}}
						>
							<span style={{ fontSize: "2rem" }}>{card.icon}</span>
							<div
								style={{
									fontWeight: 700,
									marginTop: 12,
									color: card.color,
								}}
							>
								{card.title}
							</div>
							<div
								style={{
									color: "#475569",
									fontSize: "1rem",
									marginTop: 6,
								}}
							>
								{card.description}
							</div>
							<div
								style={{
									color: "#64748b",
									fontSize: "0.95rem",
									marginTop: 8,
								}}
							>
								{card.info}
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Quick Actions */}
			<div
				style={{
					background: "#fff",
					borderRadius: 18,
					boxShadow: "0 2px 8px #e0e7ef",
					padding: "24px 28px",
					maxWidth: 700,
					margin: "0 auto 32px auto",
					textAlign: "center",
					zIndex: 2,
					display: "flex",
					gap: 24,
					justifyContent: "center",
					flexWrap: "wrap",
				}}
			>
				<Link
					to="/profile"
					style={{
						background: "#4e73df",
						color: "#fff",
						borderRadius: 12,
						padding: "12px 28px",
						fontWeight: 700,
						fontSize: "1rem",
						textDecoration: "none",
						boxShadow: "0 2px 8px #4e73df22",
						transition: "background 0.2s",
					}}
				>
					👤 Profile
				</Link>
				<Link
					to="/certificate"
					style={{
						background: "#ffd54f",
						color: "#2d2d2d",
						borderRadius: 12,
						padding: "12px 28px",
						fontWeight: 700,
						fontSize: "1rem",
						textDecoration: "none",
						boxShadow: "0 2px 8px #ffd54f22",
						transition: "background 0.2s",
					}}
				>
					🎓 Certificates
				</Link>
				<Link
					to="/support"
					style={{
						background: "#43e97b",
						color: "#fff",
						borderRadius: 12,
						padding: "12px 28px",
						fontWeight: 700,
						fontSize: "1rem",
						textDecoration: "none",
						boxShadow: "0 2px 8px #43e97b22",
						transition: "background 0.2s",
					}}
				>
					💬 Support
				</Link>
			</div>

			{/* Progress Bar Example */}
			<div
				style={{
					background: "#fff",
					borderRadius: 18,
					boxShadow: "0 2px 8px #e0e7ef",
					padding: "28px 36px",
					minWidth: 320,
					maxWidth: 420,
					marginBottom: 32,
					textAlign: "center",
				}}
			>
				<div
					style={{
						fontWeight: 700,
						color: "#2563eb",
						marginBottom: 8,
					}}
				>
					Your Learning Progress
				</div>
				<div
					style={{
						background: "#e0e7ef",
						borderRadius: 8,
						height: 18,
						width: "100%",
						marginBottom: 8,
						overflow: "hidden",
					}}
				>
					<div
						style={{
							background:
								"linear-gradient(90deg, #4e73df 0%, #43e97b 100%)",
							height: "100%",
							width: "65%", // Example progress
							borderRadius: 8,
							transition: "width 0.5s",
						}}
					/>
				</div>
				<div style={{ color: "#475569", fontSize: "1rem" }}>
					65% completed
				</div>
			</div>

			{/* Motivational Message */}
			<div
				style={{
					background: "#fff",
					borderRadius: 18,
					boxShadow: "0 2px 8px #e0e7ef",
					padding: "24px 28px",
					maxWidth: 700,
					margin: "0 auto 32px auto",
					textAlign: "center",
					zIndex: 2,
					fontStyle: "italic",
					color: "#2563eb",
					fontWeight: 600,
					fontSize: "1.15rem",
				}}
			>
				🚀 Keep learning! Every step brings you closer to your goals.
			</div>

			{/* Testimonials Section */}
			<div
				style={{
					background: "#fff",
					borderRadius: 18,
					boxShadow: "0 2px 8px #e0e7ef",
					padding: "32px 28px",
					maxWidth: 700,
					margin: "0 auto 48px auto",
					textAlign: "center",
					zIndex: 2,
				}}
			>
				<h3
					style={{
						color: "#2563eb",
						fontWeight: 800,
						marginBottom: 18,
					}}
				>
					Learner Success Stories
				</h3>
				<div
					style={{
						display: "flex",
						gap: 24,
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<div style={{ maxWidth: 200 }}>
						<div
							style={{
								fontStyle: "italic",
								color: "#475569",
							}}
						>
							“I completed 5 courses and got certified!”
						</div>
						<div
							style={{
								marginTop: 8,
								fontWeight: 700,
								color: "#43e97b",
							}}
						>
							— Priya S.
						</div>
					</div>
					<div style={{ maxWidth: 200 }}>
						<div
							style={{
								fontStyle: "italic",
								color: "#475569",
							}}
						>
							“The dashboard makes tracking progress so easy.”
						</div>
						<div
							style={{
								marginTop: 8,
								fontWeight: 700,
								color: "#2563eb",
							}}
						>
							— Michael T.
						</div>
					</div>
					<div style={{ maxWidth: 200 }}>
						<div
							style={{
								fontStyle: "italic",
								color: "#475569",
							}}
						>
							“I love the quick actions and support!”
						</div>
						<div
							style={{
								marginTop: 8,
								fontWeight: 700,
								color: "#ffd54f",
							}}
						>
							— Fatima R.
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div
				style={{
					marginTop: "auto",
					padding: "24px 0",
					color: "#64748b",
					fontSize: "1rem",
					textAlign: "center",
					zIndex: 2,
				}}
			>
				&copy; {new Date().getFullYear()} Learnhub. All rights reserved.
			</div>
		</div>
	);
}