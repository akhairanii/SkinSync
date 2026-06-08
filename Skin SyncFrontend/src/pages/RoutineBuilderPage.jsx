import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Menambahkan useNavigate untuk tombol back
import routineData from "../data/routineData";
import RoutineStep from "../components/RoutineStep";
import "../styles/routine.css";

const CelebrationModal = ({ onClose, timeMode }) => (
<div className="celebration-overlay" onClick={onClose}>
<div className="celebration-card" onClick={(e) => e.stopPropagation()}>
<div className="confetti-icon">
{timeMode === "am" ? "☀️" : "🌙"}
</div>
<h2>
{timeMode === "am" ? "Morning Routine Complete!" : "Night Routine Complete!"}
</h2>
<p>
{timeMode === "am"
? "Seluruh rutinitas pagi telah selesai. Jangan lupa reapply sunscreen jika beraktivitas di luar ruangan"
: "Rutinitas malam telah selesai. Saatnya kulit beristirahat dan melakukan regenerasi"}
</p>
<button className="celebration-btn" onClick={onClose}>
continue
</button>
</div>
</div>
);

export default function RoutineBuilderPage() {
const navigate = useNavigate(); // Inisialisasi hook navigate
const skinType = localStorage.getItem("skinType") || "Normal"; // Perbaikan typo skiinType
const todayIndex = new Date().getDay();

const days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fullDaysName = {
sun: "Sunday",
Mon: "Monday",
Tue: "Tuesday",
Wed: "Wednesday",
Thu: "Thursday",
Fri: "Friday",
Sat: "Saturday"
};

const [selectedDay, setSelectedDay] = useState(days[todayIndex]);
const [timeMode, setTimeMode] = useState("am");
const [completedSteps, setCompletedSteps] = useState([]); // Perbaikan typo nama state
const [showCelebration, setShowCelebration] = useState(false);

const routineBySkinType = {
Normal: routineData["default"],
Kering: routineData["default"],
Berminyak: routineData["default"],
Kombinasi: routineData["default"],
Sensitif: routineData["default"],
Jerawat: routineData["default"]
};

const selectedRoutine = routineBySkinType[skinType] || routineData["default"];
const dailySteps = selectedRoutine[timeMode] || []; // Perbaikan typo timemode -> timeMode
const weeklyTreatment = selectedRoutine.weekly || []; // Disamakan dengan variabel di bawah

const todaysSpecial = weeklyTreatment.find((t) =>
t.day && t.day.includes(selectedDay)
);

const storageKey = `SkinSyncRoutine_${skinType}_${selectedDay}_${timeMode}`;

useEffect(() => {
const savedData = localStorage.getItem(storageKey);
if (savedData) {
try {
setCompletedSteps(JSON.parse(savedData));
} catch {
setCompletedSteps([]);
}
} else {
setCompletedSteps([]);
}
setShowCelebration(false);
}, [storageKey]);

useEffect(() => {
localStorage.setItem(storageKey, JSON.stringify(completedSteps));
}, [completedSteps, storageKey]);

const totalSteps = dailySteps.length + (todaysSpecial && timeMode === "pm" ? 1 : 0);
const progress = totalSteps > 0 ? (completedSteps.length / totalSteps) * 100 : 0;

useEffect(() => {
if (progress === 100 && totalSteps > 0) {
const timeout = setTimeout(() => {
setShowCelebration(true);
}, 500);
return () => clearTimeout(timeout);
}
}, [progress, totalSteps]);

const toggleCheck = (index) => {
if (completedSteps.includes(index)) {
setCompletedSteps(completedSteps.filter((item) => item !== index));
} else {
setCompletedSteps([...completedSteps, index]);
}
};

return (
<section className={`routine-page ${timeMode}`}>
<button className="back-btn" onClick={() => navigate(-1)}>
← Product Library
</button>
<span className="routine-tag">ROUTINE BUILDER</span>
<h1 className="routine-title"> personalized Skincare Routine</h1>
<p className="routine-sub">
Rutinitas skincare yang direkomendasikan untuk tipe kulit <strong>{skinType}</strong>
</p>

<div className="routine-summary-card">
<h3> Your Skin Profile </h3>
<p>Ikuti rutinitas berikut secara konsisten untuk membantu menjaga kesehatan kulit</p>
<div className="routine-info">
<span> Skin Type: {skinType} </span>
<span> Steps: {dailySteps.length} </span>
</div>
</div>

<div className="day-selector-container">
<div className="day-selector">
{days.map((day) => (
<button
key={day}
className={`day-btn ${selectedDay === day ? "selected" : ""}`}
onClick={() => setSelectedDay(day)}
>
{day}
</button>
))}
</div>
</div>

<div className="time-switcher">
<button
className={`time-btn ${timeMode === "am" ? "active" : ""}`}
onClick={() => setTimeMode("am")}
>
☀️ Morning Routine
</button>
<button
className={`time-btn ${timeMode === "pm" ? "active" : ""}`}
onClick={() => setTimeMode("pm")}
>
🌙 Night Routine
</button>
</div>

<div className="progress-container">
<div className="progress-label">
<span>{fullDaysName[selectedDay]}</span>
<span>{Math.round(progress)}%</span>
</div>
<div className="progress-track">
<div className="progress-fill" style={{ width: `${progress}%` }}></div>
</div>
</div>

{todaysSpecial && timeMode === "pm" && (
<div className="special-card">
<div className="special-icon"> {todaysSpecial.icon}</div>
<div className="special-content">
<h4> Weekly Treatment</h4>
<h3> {todaysSpecial.type}</h3>
<p> {todaysSpecial.desc}</p>
</div>
</div>
)}

<div className="routine-list">
{dailySteps.map((step, index) => (
<RoutineStep
key={index}
stepData={step}
isCompleted={completedSteps.includes(index)}
onCheck={() => toggleCheck(index)}
/>
))}
</div>

<div className="tips-trigger-card">
<div className="trigger-icon">📚</div>
<div className="trigger-content">
<h3> SkincareEducation</h3>
<p> Pelajari manfaat ingredients, urutan skincare, dan tips perawatan kulit</p>
</div>
<Link to="/journal" className="trigger-btn">
Open Journal →
</Link>
</div>

{showCelebration && (
<CelebrationModal
onClose={() => setShowCelebration(false)}
timeMode={timeMode}
/>
)}
</section>
);
}