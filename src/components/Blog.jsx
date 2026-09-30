function Blog() {

  const posts = [
    {
      title: "Introduction to Embedded Systems",
      text:
        "Learn the fundamentals of microcontrollers, sensors and actuators."
    },

    {
      title: "Getting Started with React",
      text:
        "Understand components, JSX, props and state in React."
    },

    {
      title: "Understanding Data Structures",
      text:
        "A beginner-friendly introduction to arrays, stacks, queues, trees and graphs."
    }
  ];

  return (
    <section id="blog" className="section">

      <h2>My Blog</h2>

      <div className="blog-container">

        {posts.map((post, index) => (

          <article className="blog-card" key={index}>

            <h3>{post.title}</h3>

            <p>{post.text}</p>

            <a href="#blog">
              Read More →
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Blog;
