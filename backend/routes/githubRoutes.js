import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/repositories", async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME;

    if (!username) {
      return res.status(500).json({
        message: "GitHub username is not configured"
      });
    }

    const response = await axios.get(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos`,
      {
        params: {
          sort: "updated",
          direction: "desc",
          per_page: 30,
          type: "owner"
        },
        headers: {
          Accept: "application/vnd.github+json"
        },
        timeout: 10000
      }
    );

    const repositories = response.data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at
      }));

    res.json(repositories);

  } catch (error) {
    console.error("GitHub API error:", error.message);

    res.status(502).json({
      message: "Unable to fetch GitHub repositories"
    });
  }
});

export default router;