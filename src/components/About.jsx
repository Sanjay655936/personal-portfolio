function About() {
  return (
    <section id="about" className="section">

      <h2>About Me</h2>

      <div className="about-container">

        <div>
          <h3>Who I Am</h3>

          <p>
            I am an Electronics and Communication Engineering student
            interested in software development, embedded systems,
            IoT and emerging technologies.
          </p>

          <p>
            I enjoy building practical projects that combine hardware
            and software to solve real-world problems.
          </p>
        </div>

        <div className="education-card">

          <h3>Education</h3>

          <h4>B.Tech - Electronics & Communication Engineering</h4>

          <p>KL University</p>

          <p>Interested Areas:</p>

          <ul>
            <li>Embedded Systems</li>
            <li>Web Development</li>
            <li>Internet of Things</li>
            <li>Data Structures</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;
