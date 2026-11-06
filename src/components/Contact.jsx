import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    const response = await api.post("/api/contact", data);

    setSuccess(response.data.message);
    e.target.reset();

  } catch (err) {
    setError(
      err.response?.data?.message ||
      "Unable to send your message."
    );
  } finally {
    setLoading(false);
  }
};
  const [messageSent, setMessageSent] = useState(false);



  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

     <form onSubmit={handleSubmit}>

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