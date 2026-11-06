import { useEffect, useState } from "react";
import api from "../services/api";

export default function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/api/github/repositories")
      .then((response) => {
        setProjects(response.data);
      })
      .catch(() => {
        setError("Unable to load GitHub projects.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading GitHub repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.name}</h3>

          <p>
            {project.description || "No description available"}
          </p>

          <p>
            Language: {project.language || "Not specified"}
          </p>

          <p>Stars: {project.stars}</p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}