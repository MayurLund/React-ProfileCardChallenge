import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return <img className="avatar" src="Spiderman.jpg" alt="Spiderman" />;
}

function Intro() {
  return <h1 className="data">I am Spiderman</h1>;
}

function SkillList() {
  return (
    <div>
      <Skill skill="WebDeveloper" />
      <Skill skill="Python" />
      <Skill skill="AI enthusiast" />
    </div>
  );
}
function Skill(props) {
  return <p className="skill">{props.skill}</p>;
}

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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
