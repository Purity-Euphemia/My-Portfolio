import React from 'react';
import './style.css';

function Page() {
  return (
    <div className="dashboard">

      {/* Header */}
      <header className="header">
        <h1>Chinaemelum Euphemia</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="profile-pic">
            <img 
              src="./img/profile_pic.jpg"
              alt="Profile of Chinaemelum Euphemia"
            />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I’m <strong>Chinaemelum Euphemia</strong>, a passionate and detail-oriented web developer 
              who loves transforming ideas into visually appealing, interactive, and user-friendly digital experiences.
              My journey into tech began with a deep curiosity for how things work on the web, and over time,
              that curiosity turned into a full-fledged career in front-end development.
            </p>
            <p>
              I specialize in building responsive, modern applications using <strong>React.js</strong>, 
              <strong> JavaScript (ES6+)</strong>, and <strong>Tailwind CSS</strong>. 
              I enjoy clean design, intuitive user interfaces, and writing code that’s both elegant and efficient. 
              For me, development is not just about functionality — it’s about creating meaningful 
              connections between people and technology.
            </p>
            <p>
              Beyond coding, I’m a continuous learner who loves exploring new technologies, contributing to 
              open-source projects, and collaborating on creative ideas. I take pride in being reliable, 
              adaptable, and always eager to learn something new every day.
            </p>
            <p>
              When I’m not coding, you can find me reading, listening to good music, or brainstorming my next 
              creative project. I believe in growth, purpose, and the power of technology to change lives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal site to showcase my projects, skills, and creative journey as a developer.</p>
          <a href="http://my-portfolio-tau-navy-81.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Todo Task</h3>
          <p>A React-based task management app with local storage support to keep users organized.</p>
          <a href="https://github.com/yourusername/task-tracker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>A web app that helps users monitor their expenses, set budgets, and visualize spending trends.</p>
          <a href="https://github.com/yourusername/expense-tracker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Responsive Web Design</li>
          <li>Problem Solving & Debugging</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:euphemia@example.com">euphemia@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/euphemia-obachie-bb12b8373" target="_blank" rel="noopener noreferrer">linkedin.com/in/euphemia</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Chinaemelum Euphemia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page;
