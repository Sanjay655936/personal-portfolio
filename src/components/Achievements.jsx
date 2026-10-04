import { useState } from "react";

function Achievements() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      icon: "🏙️",
      title: "Smart City Simulator",
      technology: "C, Data Structures & Algorithms",
      abstract:
        "Smart City Simulator is a simulation platform designed to manage essential city services such as traffic management, electricity distribution, water supply and waste management. The project uses graphs, queues, heaps, trees and minimum spanning trees to efficiently represent and optimize city operations.",
      features: [
        "Traffic Management",
        "Water Supply Management",
        "Electricity Distribution",
        "Waste Management",
        "Graph-based city representation",
        "Priority-based service management"
      ]
    },

    {
      icon: "🌱",
      title: "Greenhouse Automation Using IoT",
      technology: "IoT, Arduino & Sensors",
      abstract:
        "Greenhouse Automation is an IoT-based project designed to maintain suitable environmental conditions for plants. Temperature and soil-moisture sensors are used to monitor the greenhouse, while a fan, heater and water pump are controlled automatically.",
      features: [
        "Temperature monitoring",
        "Soil moisture monitoring",
        "Automatic water pump",
        "Automatic fan control",
        "Heater control",
        "IoT-based automation"
      ]
    },

    {
      icon: "🗺️",
      title: "Tour Tales",
      technology: "Web Development",
      abstract:
        "Tour Tales is a tourist safety and assistance application designed to improve the travel experience of tourists visiting India. The application provides translation support, room booking, transportation options, emergency SOS assistance and information about nearby hotels and temples.",
      features: [
        "Tourist safety assistance",
        "Translator",
        "Room booking",
        "Transportation information",
        "Emergency SOS",
        "Nearby hotels and temples"
      ]
    },

    {
      icon: "🧑‍🎓",
      title: "Student Grievance Redressal System",
      technology: "Python, HTML & CSS",
      abstract:
        "The Student Grievance Redressal System provides a digital platform where students can submit complaints or grievances. Administrators can view, manage and update the status of submitted grievances.",
      features: [
        "Grievance submission",
        "Grievance management",
        "Status tracking",
        "Admin management",
        "Simple web interface"
      ]
    },

    {
      icon: "🌐",
      title: "Personal Portfolio Website",
      technology: "React, Vite, HTML & CSS",
      abstract:
        "A personal portfolio website developed to showcase educational background, technical skills, projects, achievements, certificates and contact information.",
      features: [
        "Responsive design",
        "Project showcase",
        "Skills section",
        "Achievements section",
        "Certificate section",
        "Contact section"
      ]
    }
  ];

  const achievements = [
    {
      icon: "🎓",
      type: "Education",
      title: "B.Tech in Electronics & Communication Engineering",
      organization: "KL University",
      year: "2025 - Present",
      description:
        "Currently pursuing B.Tech in Electronics and Communication Engineering with an interest in embedded systems, programming, web development and communication technologies."
    },

    {
      icon: "📜",
      type: "Certificates",
      title: "My Certifications",
      organization: "Technical & Professional Certifications",
      year: "2025 - 2026",
      description:
        "A collection of technical and professional certificates earned through academic courses, online learning and skill development."
    }
  ];

  return (
    <section id="achievements" className="section">

      <h2>Achievements & Education</h2>

      <div className="achievement-container">

        {/* EDUCATION AND CERTIFICATES */}

        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <p className="achievement-type">
              {achievement.type}
            </p>

            <h3>{achievement.title}</h3>

            <p>{achievement.organization}</p>

            <span>{achievement.year}</span>

            <button
              className="achievement-btn"
              onClick={() => setSelectedItem(achievement)}
            >
              View Details
            </button>

          </div>
        ))}

        {/* ONE PROJECT CARD */}

        <div className="achievement-card">

          <div className="achievement-icon">
            💻
          </div>

          <p className="achievement-type">
            Projects
          </p>

          <h3>My Projects</h3>

          <p>
            Academic, IoT, web development and data
            structures projects.
          </p>

          <span>
            {projects.length} Projects
          </span>

          <button
            className="achievement-btn"
            onClick={() => setShowProjects(true)}
          >
            View Projects
          </button>

        </div>

      </div>


      {/* PROJECTS POPUP */}

      {showProjects && (
        <div className="achievement-modal">

          <div className="achievement-modal-box projects-popup">

            <button
              className="achievement-close"
              onClick={() => setShowProjects(false)}
            >
              ✕
            </button>

            <h2>My Projects</h2>

            <p className="popup-subtitle">
              Academic and personal projects
            </p>

            <div className="popup-projects">

              {projects.map((project, index) => (

                <div
                  className="popup-project-card"
                  key={index}
                >

                  <div className="popup-project-icon">
                    {project.icon}
                  </div>

                  <div>
                    <h3>{project.title}</h3>

                    <p>
                      {project.technology}
                    </p>

                    <button
                      className="achievement-btn"
                      onClick={() =>
                        setSelectedItem(project)
                      }
                    >
                      View Details
                    </button>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      )}


      {/* DETAILS POPUP */}

      {selectedItem && (
        <div className="achievement-modal">

          <div className="achievement-modal-box">

            <button
              className="achievement-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            <div className="achievement-modal-icon">
              {selectedItem.icon}
            </div>

            <p className="achievement-type">
              {selectedItem.type || "PROJECT"}
            </p>

            <h2>
              {selectedItem.title}
            </h2>

            <h4>
              {selectedItem.organization ||
                `Technologies: ${selectedItem.technology}`}
            </h4>

            {selectedItem.year && (
              <p>
                <strong>Year:</strong>{" "}
                {selectedItem.year}
              </p>
            )}

            <h3>
              {selectedItem.abstract
                ? "Abstract"
                : "Description"}
            </h3>

            <p className="achievement-description">
              {selectedItem.abstract ||
                selectedItem.description}
            </p>

            {selectedItem.features && (
              <>
                <h3>Key Features</h3>

                <ul className="project-feature-list">

                  {selectedItem.features.map(
                    (feature, index) => (
                      <li key={index}>
                        {feature}
                      </li>
                    )
                  )}

                </ul>
              </>
            )}

          </div>

        </div>
      )}

    </section>
  );
}

export default Achievements;