interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PHP", category: "Backend" },

  { name: "MySQL", category: "Database" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "MySQL WorkBench", category: "Tools" },
  { name: "XAMPP", category: "Tools" },
];

function Skills() {
  const categories = ["Frontend", "Backend", "Database", "Tools"] as const;

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