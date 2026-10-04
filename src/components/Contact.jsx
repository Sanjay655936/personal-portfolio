import { useState } from "react";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setMessageSent(true);

    // Clear the form
    e.target.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

        {messageSent && (
          <p className="contact-success">
            ✅ Your message has been sent successfully!
          </p>
        )}

      </form>

    </section>
  );
}

export default Contact;