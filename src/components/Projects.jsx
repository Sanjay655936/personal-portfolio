function Projects() {

  const projects = [
    {
      title: "Tour Tales",
      description:
        "A tourist safety application providing translation, emergency SOS, transportation and nearby tourist locations.",
      technology: "HTML, CSS, JavaScript"
    },

    {
      title: "Smart City Simulator",
      description:
        "A simulation platform for traffic management, electricity distribution, water supply and waste management.",
      technology: "C, Data Structures"
    },

    {
      title: "Greenhouse Automation",
      description:
        "An IoT-based greenhouse automation system using temperature and soil moisture sensors, fan, heater and water pump.",
      technology: "Arduino, IoT, Sensors"
    },

    {
      title: "Student Performance Analysis",
      description:
        "A dashboard-based system for analyzing student academic performance and identifying performance trends.",
      technology: "Python, Excel, Power BI"
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>My Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              💻
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <strong>
              Technologies: {project.technology}
            </strong>

            <button className="project-btn">
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
