function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Your Name</span>
        </h1>

        <h2>ECE Student & Aspiring Developer</h2>

        <p>
          I am passionate about programming, embedded systems,
          web development and solving real-world problems using technology.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

      </div>

      <div className="profile">
        <div className="profile-circle">
          👨‍💻
        </div>
      </div>

    </section>
  );
}

export default Home;
