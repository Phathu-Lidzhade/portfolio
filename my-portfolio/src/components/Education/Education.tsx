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
  },
  {
    institution: "IT Varsity",
    qualification: "FNB App Academy Certificate in FullStack Development",
    period: "May 2025 - August 2025",
    description: "Completed a short course hosted by FNB in collaboration with IT Varsity on FullStack Development, included HTML, CSS and JavaScript frontend lessons, Python, API's and Django backend lessons and SQL database lessons.",
  },
  {
    institution: "CSIR/UNIVEN",
    qualification: "CSIR CyberSecurity Hackathon Participation Certificate",
    period: "December 2025",
    description: "Participated in a 3 day hackathon at the CSIR headquarters in Pretoria South Africa, worked as the developer in a 4 people team with varying roles.",
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