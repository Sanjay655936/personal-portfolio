import { useState } from "react";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      icon: "💻",
      title: "My Journey into Web Development",
      date: "2026",
      short:
        "My experience learning HTML, CSS, JavaScript and React and building my first portfolio website.",
      content: `
        My journey into web development started with learning the basics of
        HTML and CSS. At first, creating a simple webpage helped me understand
        how websites are structured and styled.

        After learning HTML and CSS, I started exploring JavaScript. JavaScript
        helped me understand how websites can become interactive and dynamic.

        Later, I started learning React and Vite. React helped me understand
        how reusable components can be created and how a complete website can
        be divided into different sections.

        While developing my personal portfolio, I worked on sections such as
        Home, About, Skills, Projects, Achievements, Blog and Contact.

        This project helped me improve my programming skills and gave me
        practical experience in frontend development.
      `
    },

    {
      icon: "🤖",
      title: "Learning Embedded Systems",
      date: "2026",
      short:
        "My experience learning microcontrollers, sensors, timers, interrupts and embedded programming.",
      content: `
        Embedded systems are one of my major areas of interest as an
        Electronics and Communication Engineering student.

        I started learning about microcontrollers and gradually explored
        GPIO, ADC, timers, PWM, interrupts, UART and DMA.

        Working with STM32 microcontrollers helped me understand how
        hardware and software work together. I learned how to configure
        peripherals and write programs to control different hardware
        components.

        I also worked with sensors, motors and other electronic components.
        These practical experiments helped me understand concepts that are
        difficult to learn only through theory.

        Embedded systems have increased my interest in developing
        real-world hardware and IoT applications.
      `
    },

    {
      icon: "🌱",
      title: "Building an IoT Greenhouse",
      date: "2025",
      short:
        "How I worked on an IoT-based greenhouse automation project using sensors and actuators.",
      content: `
        Greenhouse Automation is an IoT-based project designed to maintain
        suitable environmental conditions for plants.

        The system uses sensors to monitor parameters such as temperature
        and soil moisture. Based on the sensor readings, different actuators
        can be controlled automatically.

        A water pump can be activated when the soil moisture becomes low.
        Similarly, a DC fan can be used to control temperature and a heater
        can be activated when additional heat is required.

        This project helped me understand sensor interfacing, automation,
        microcontrollers and IoT concepts.

        The main objective was to reduce manual monitoring and create a
        system that can automatically respond to environmental conditions.
      `
    },

    {
      icon: "🏙️",
      title: "Smart City Simulator Using Data Structures",
      date: "2026",
      short:
        "How data structures and algorithms can be used to simulate smart-city services.",
      content: `
        Smart City Simulator is an academic project that demonstrates how
        data structures and algorithms can be applied to real-world city
        management problems.

        The system models important services such as traffic management,
        electricity distribution, water supply and waste management.

        Different data structures are used for different requirements.
        Graphs can represent roads and city connections, queues can manage
        incoming service requests, heaps can prioritize important tasks and
        trees can represent hierarchical systems.

        Minimum Spanning Tree algorithms such as Prim's and Kruskal's
        algorithms can also be used for optimizing infrastructure
        connections.

        This project helped me understand how theoretical data structures
        can be applied to practical problems.
      `
    }
  ];

  return (
    <section id="blog" className="section">

      <h2>My Blog</h2>

      <div className="blog-container">

        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>

            <div className="blog-icon">
              {blog.icon}
            </div>

            <span className="blog-date">
              {blog.date}
            </span>

            <h3>{blog.title}</h3>

            <p>{blog.short}</p>

            <button
              className="read-more-btn"
              onClick={() => setSelectedBlog(blog)}
            >
              Read More
            </button>

          </div>
        ))}

      </div>


      {/* BLOG POPUP */}

      {selectedBlog && (
        <div className="blog-modal">

          <div className="blog-modal-box">

            <button
              className="blog-close"
              onClick={() => setSelectedBlog(null)}
            >
              ✕
            </button>

            <div className="blog-modal-icon">
              {selectedBlog.icon}
            </div>

            <span className="blog-date">
              {selectedBlog.date}
            </span>

            <h2>{selectedBlog.title}</h2>

            <div className="blog-content">
              {selectedBlog.content
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Blog;