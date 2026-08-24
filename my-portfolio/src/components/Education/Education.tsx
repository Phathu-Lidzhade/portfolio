interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  description: string;
}
const education: EducationItem[] = [
  {
  institution: "University Of Venda",
  qualification: "Bachelor of Science in Computer Science",
  period: "2022 - 2026",
  description: "Studying computer science with a focus on software development, algorithms, database design, networking, artificial intelligence and software engineering.",
}
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-heading">
          <p>Education</p>
          <h2>My academic background</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.qualification}>
              <div className="education-period">
                {item.period}
              </div>

              <div className="education-content">
                <h3>{item.qualification}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education