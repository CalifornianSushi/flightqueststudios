'use client';

import { motion } from 'framer-motion';
// src/app/page.tsx
export default function Home() {
  return (
    <main className="main">
      {/* Navigation */}
      <motion.nav
        className="nav"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <a href="#" className="logo">FlightQuest Studios</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#tech">Tech</a>
            <a href="#founder">Founder</a>
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
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FlightQuest Studios
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Where Aviation Meets Innovation
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Explore Projects
        </motion.a>
      </motion.section>

      {/* About Section */}
      <section id="about" className="section dark">
        <div className="container">
          <h2>About Us</h2>
          <p>
            FlightQuest Studios is an engineering focused innovation hub founded by Nimai Garg to fuse aviation software and hardware through interactive educational projects. Our mission is to inspire and educate through immersive simulations and real world tech.
          </p>
        </div>
      </section>

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
              whileHover={{ scale: 1.03 }}
            >
              <h3>Aircraft Adventure</h3>
              <p>
                A flight simulation game with educational quizzes about aircraft specs systems and manufacturers. Built using JavaScript and Phaser, players make real time decisions using fuel management airspeed flaps and more.
              </p>
              <p className="stack">Tech Stack JavaScript Phaser HTML5</p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>Flight Control Panel</h3>
              <p>
                A custom built hardware panel using Arduino that physically controls the in game experience from gear and throttle to flaps and fuel showcasing hardware software integration for real world engineering applications.
              </p>
              <p className="stack">Tech Stack Arduino USB Bluetooth Embedded C</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Toolbox Section */}
      <section id="tech" className="section dark">
        <div className="container">
          <h2>Our Tech Toolbox</h2>
          <p>We build projects using cutting edge tools across web development game engines and embedded systems.</p>
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

      {/* Founder Section */}
      <section id="founder" className="section">
        <div className="container">
          <h2>Meet the Founder</h2>
          <p>
            Nimai Garg is a high school student innovator and founder of multiple ventures including Bright Sparks and Travel Local. Passionate about aviation engineering and software he built FlightQuest Studios to bridge education with real world technology through interactive simulations and embedded systems.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} FlightQuest Studios All rights reserved
      </footer>
    </main>
  );
}