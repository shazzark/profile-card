import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    Skill: "HTML+CSS",
    level: "advanced",
    color: "#1864ab",
  },
  {
    Skill: "javascript",
    level: "advanced",
    color: "#087f5b",
  },
  {
    Skill: "Web Design",
    level: "advanced",
    color: "#1864ab",
  },
  {
    Skill: "React",
    level: "Beginner",
    color: "#c92a2a",
  },
  {
    Skill: "Trader",
    level: "intermediate",
    color: "#0b7285",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="daniel.jpg" alt="nnam daniel chidozie" />;
}

function Intro() {
  return (
    <div>
      <h1> daniel nnam </h1>
      <p>
        {" "}
        i am web developer i like to play games i am a nigerian and i am
        learning react with this.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.Skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
