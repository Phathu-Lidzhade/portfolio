import "./Education.css";

interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  description: string;
}
const education: EducationItem[] = [
  {
    institution: "University Of Venda",
    qualification: "Bachelor of Science in Computer Sciences",
    period: "2022 - 2026",
    description: "Completed BSc in Computer Sciences degree, included modules such as Software Engineering, Database Systems, Advanced Algorithms, Operating Systems, and Artificial Intelligence.",
  },
  {
    institution: "IT Varsity",
    qualification: "FNB App Academy Certificate in FullStack Development",
    period: "May 2025 - July 2025",
    description: "Completed a short course hosted by FNB in collaboration with IT Varsity on FullStack Development, included HTML, CSS and JavaScript frontend lessons, Python, API's and Django backend lessons and SQL database lessons.",
  },
  {
    institution: "CSIR/UNIVEN",
    qualification: "CSIR CyberSecureTech Hackathon Participation Certificate",
    period: "December 2025",
    description: "Collaborated with a four-person team to develop a panic-button style application for emergency situations. Implemented functionality that sends the user’s tracking/location information to pre-assigned family and friends when the panic button is activated.",
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