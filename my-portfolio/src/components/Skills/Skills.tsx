import "./Skills.css";

interface Skill {
  name: string;
  category: "Programming Languages" | "Frontend Development" | "Backend Development" | "Development Tools";
}

const skills: Skill[] = [
  { name: "C++", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "PHP", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  
  { name: "React.js", category: "Frontend Development" },
  { name: "HTML", category: "Frontend Development" },
  { name: "CSS", category: "Frontend Development" },
  { name: "JavaScript", category: "Frontend Development" },
  { name: "TypeScript", category: "Frontend Development" },
  { name: "Vite", category: "Frontend Development" },

  { name: "Node.js", category: "Backend Development" },
  { name: "PHP", category: "Backend Development" },
  { name: "Express.js", category: "Backend Development" },
  { name: "MySQL", category: "Backend Development" },
  { name: "SQL", category: "Backend Development" },

  { name: "Git", category: "Development Tools" },
  { name: "GitHub", category: "Development Tools" },
  { name: "VS Code", category: "Development Tools" },
  { name: "MySQL WorkBench", category: "Development Tools" },
  { name: "XAMPP", category: "Development Tools" },
  { name: "Apache", category: "Development Tools" },
];

function Skills() {
  const categories = ["Programming Languages", "Frontend Development", "Backend Development", "Development Tools"] as const;

  return(
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p>My Skills</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>

              <div className="skill-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span className="skill" key={skill.name}>
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;