"use client";
import './globals.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function Home() {
  const [buttonStatus, setButtonStatus] = useState<"default" | "success" | "error">("default");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_1cy083i', 'template_9vhhjxy', form, '6EDEmxvg0-aeI8R5d')
      .then(() => {
        setButtonStatus("success");
        setTimeout(() => setButtonStatus("default"), 3000);
        form.reset();
      }, () => {
        setButtonStatus("error");
        setTimeout(() => setButtonStatus("default"), 3000);
      });
  };

  return (
    <main className="main">

      {/* Navigation */}
      <motion.nav
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="nav-container">
          <div className="logo">FlightQuest Studios</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>FlightQuest Studios</h1>
        <p>Where Aviation Meets Innovation</p>
        <div className="hero-button">
          <a href="#projects" className="hero-btn">Projects</a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Aircraft Adventure</h3>
              <p>
                A flight simulation game with educational quizzes about aircraft specs, systems, and manufacturers. Built using JavaScript and Phaser.
              </p>
              <p className="stack">Tech, Stack, JavaScript, Phaser, HTML5</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>NetReach</h3>
              <p>
                A real-time network diagnostic tool for low-bandwidth areas. NetReach analyzes packet loss, latency, and jitter, offering plain-language fixes with an LLM chatbot.
              </p>
              <p className="stack">Tech, Stack, Next.js, JavaScript, Firestore, Tailwind, AI</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="section">
        <div className="container">
          <h2>Tech Toolbox</h2>
          <p>
            We build projects using cutting-edge tools across web development, game engines, and embedded systems.
          </p>
          <div className="tools">
            <span className="tool">Next.js</span>
            <span className="tool">TypeScript</span>
            <span className="tool">Phaser</span>
            <span className="tool">Arduino</span>
            <span className="tool">Raspberry Pi</span>
            <span className="tool">JavaScript</span>
            <span className="tool">Tailwind CSS</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="section dark">
  <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact</h2>
  <div className="container contact-grid">
    <div className="contact-info">
      <h3>Let's connect</h3>
      <p>
        My inbox is always open. Whether you have a question or want to chat, I'll try my best to get back to you as soon as possible!
      </p>
    </div>
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
      </div>
      <textarea name="message" rows={4} placeholder="Type your message...." required></textarea>
      <div className="contact-submit">
        <button
          type="submit"
          className={`hero-btn submit-btn ${buttonStatus}`}
        >
          {buttonStatus === "success" ? "Message Sent" : buttonStatus === "error" ? "Failed to Send" : "Submit"}
        </button>
      </div>
    </form>
  </div>
</section>

      <footer className="footer">
        © {new Date().getFullYear()} FlightQuest Studios All rights reserved
      </footer>
    </main>
  );
}