import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      icon: "🏙️",
      title: "Smart City Simulator",
      technology: "C, Data Structures & Algorithms",
      short:
        "A simulation platform for managing important smart-city services.",
      abstract:
        "Smart City Simulator is a simulation platform designed to model and manage essential city services such as traffic management, electricity distribution, water supply and waste management. The project uses data structures and algorithms including graphs, queues, heaps, trees and minimum spanning trees to efficiently represent and optimize city operations.",
      features: [
        "Traffic Management Module",
        "Water Supply Management",
        "Electricity Distribution",
        "Waste Management",
        "Graph-based city representation",
        "Priority-based service management"
      ]
    },

    {
      id: 2,
      icon: "🌱",
      title: "Greenhouse Automation",
      technology: "IoT, Arduino & Sensors",
      short:
        "An IoT-based system for automatically monitoring greenhouse conditions.",
      abstract:
        "Greenhouse Automation is an IoT-based project developed to maintain suitable environmental conditions for plants. The system uses temperature and soil-moisture sensors to monitor the greenhouse. Based on the sensor values, actuators such as a DC fan, heater and water pump can be automatically controlled.",
      features: [
        "Temperature monitoring",
        "Soil moisture monitoring",
        "Automatic water pump control",
        "Automatic fan control",
        "Heater control",
        "IoT-based automation"
      ]
    },

    {
      id: 3,
      icon: "🧑‍🎓",
      title: "Student Grievance Redressal System",
      technology: "Python, HTML & CSS",
      short:
        "A web-based system for students to submit and manage grievances.",
      abstract:
        "The Student Grievance Redressal System provides a simple digital platform where students can submit their complaints or grievances. Administrators can view, manage and update the status of submitted grievances. The system helps improve communication between students and the institution.",
      features: [
        "Student grievance submission",
        "Grievance management",
        "Status tracking",
        "Admin management",
        "Simple web interface"
      ]
    },

    {
      id: 4,
      icon: "🗺️",
      title: "Tour Tales",
      technology: "Web Development & IoT Concepts",
      short:
        "A tourist safety and assistance platform for visitors travelling in India.",
      abstract:
        "Tour Tales is a tourist assistance application designed to improve the travel experience and safety of tourists visiting India. The application provides useful features such as translation support, room booking, transportation options, emergency SOS assistance and information about nearby hotels and temples.",
      features: [
        "Tourist safety assistance",
        "Translator",
        "Room booking",
        "Transportation information",
        "Emergency SOS",
        "Nearby hotels and temples"
      ]
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      {/* PROJECT CARDS */}

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.short}</p>

            <strong>
              Technologies: {project.technology}
            </strong>

            <button
              className="project-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Project
            </button>

          </div>
        ))}

      </div>


      {/* PROJECT DETAILS */}

      {selectedProject && (
        <div className="project-details">

          <div className="project-details-box">

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="project-details-icon">
              {selectedProject.icon}
            </div>

            <h2>{selectedProject.title}</h2>

            <h4>
              Technologies: {selectedProject.technology}
            </h4>

            <h3>Abstract</h3>

            <p>
              {selectedProject.abstract}
            </p>

            <h3>Key Features</h3>

            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;