import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  SiSpring, 
  SiApachekafka, 
  SiMysql, 
  SiMongodb, 
  SiRedis, 
  SiElasticsearch, 
  SiAmazonwebservices, 
  SiDocker, 
  SiGitlab, 
  SiGithubactions, 
  SiReact,
  SiHibernate
} from 'react-icons/si';
import { FaShieldAlt, FaDatabase, FaCogs, FaEnvelope, FaLock } from 'react-icons/fa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:sunkojusuryateja@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    e.target.reset();
    
    // Show success message (optional)
    alert('Opening your email client. Please send the message to contact me!');
  };

  const downloadResume = () => {
    // Download resume from public folder
    const resumeUrl = '/suryateja-backend-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Suryateja_Sunkoju_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'Java 17', level: 95, icon: null, iconUrl: 'https://e7.pngegg.com/pngimages/123/816/png-clipart-computer-icons-java-%E5%92%96%E5%95%A1%E6%B5%B7%E6%8A%A5%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90-miscellaneous-text.png', color: '#ED8B00' },
    { name: 'Spring Boot 3', level: 95, icon: SiSpring, color: '#6DB33F' },
    { name: 'Spring Security', level: 90, icon: FaLock, color: '#6DB33F' },
    { name: 'Hibernate', level: 85, icon: SiHibernate, color: '#59666C' },
    { name: 'Microservices', level: 90, icon: FaCogs, color: '#6366f1' },
    { name: 'Kafka', level: 85, icon: SiApachekafka, color: '#231F20' },
    { name: 'SQS', level: 80, icon: FaEnvelope, color: '#FF9900' },
    { name: 'Resilience4j', level: 75, icon: FaShieldAlt, color: '#6366f1' },
    { name: 'React', level: 85, icon: SiReact, color: '#61DAFB' },
    { name: 'MySQL', level: 90, icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', level: 85, icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', level: 85, icon: SiRedis, color: '#DC382D' },
    { name: 'Elasticsearch', level: 80, icon: SiElasticsearch, color: '#005571' },
    { name: 'AWS (EC2, S3, Lambda)', level: 80, icon: SiAmazonwebservices, color: '#FF9900' },
    { name: 'Docker', level: 85, icon: SiDocker, color: '#2496ED' },
    { name: 'GitLab CI/CD', level: 85, icon: SiGitlab, color: '#FC6D26' },
    { name: 'GitHub Actions', level: 80, icon: SiGithubactions, color: '#2088FF' },
    { name: 'JUnit 5', level: 85, icon: FaDatabase, color: '#25A162' },
    { name: 'Mockito', level: 85, icon: FaShieldAlt, color: '#C21325' },
  ];

  const experiences = [
    {
      title: 'Software Development Engineer - I',
      company: 'Valeo Health',
      period: 'July 2023 – Present',
      location: 'Bangalore',
      logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/615437925a3980001d77b694/0x0.png',
      description: 'Monolith → Microservices migration | Leading performance optimizing (90% faster APIs) | Building React pages and dashboards (CYOT, Orders Calendar)',
      achievements: [
        'Led migration from monolith to microservices (User/Catalog/Order) using OpenFeign + Kafka',
        'Reduced API response time 90% (800 ms → <100 ms) and search latency 70% via code refactoring, composite indexes, and Elasticsearch migration',
        'Detected and blocked active abuse of search APIs (150 GB/day Elasticsearch egress); implemented IP filtering, mandatory headers, rate limiting, payload validation and prepared statements — fully stopped the exploit',
        'Built Orders Calendar View dashboard in React with advanced filters (date, status, city, homecare), server-side pagination, and CSV/Excel export — used daily by ops team',
        'Designed and developed “Create Your Own Test” (CYOT) feature in React with real-time search, multi-level category filtering',
        'Automated order-to-invoice sync (Unicommerce ↔ Zoho Books) via Kafka & schedulers — eliminated 80% manual bookkeeping for 50K+ monthly orders',
        'Engineered OCR pipeline (Spring Boot + Tesseract) for 8 labs — eliminated 80% manual data entry',
        'Built Nurse app backend with Google Maps real-time ETA + OTP — improved nurse efficiency 60%',
        'Integrated Paymob, Freshsales, Unicommerce, and Zoho Books — enabling end-to-end payments, CRM, inventory, and billing automation'
      ]
    },
    {
      title: 'Java Microservices Intern',
      company: 'IIT Bombay',
      period: 'April 2023 – June 2023',
      location: 'Mumbai',
      logo: 'https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png',
      description: 'Developed secure microservices with authentication and authorization mechanisms, integrated SSO solutions, and implemented CI/CD pipelines.',
      achievements: [
        'Built secure User microservice with JWT, OAuth2, and RBAC using custom annotations',
        'Integrated Okta SSO + GitLab CI/CD + Docker — reduced deployment time 70%'
      ]
    }
  ];

  // const projects = [
  //   {
  //     title: 'Microservices Architecture Migration',
  //     description: 'Led migration from monolithic architecture to microservices, implementing User, Catalog, and Order services with OpenFeign and Kafka for inter-service communication.',
  //     tech: ['Spring Boot 3', 'Kafka', 'OpenFeign', 'MySQL', 'Docker'],
  //     link: '#'
  //   },
  //   {
  //     title: 'OCR Pipeline for Lab Data Processing',
  //     description: 'Engineered OCR pipeline using Spring Boot and Tesseract to automate data entry for 8 labs, eliminating 80% of manual work.',
  //     tech: ['Spring Boot', 'Tesseract', 'Java', 'REST APIs'],
  //     link: '#'
  //   },
  //   {
  //     title: 'Order-to-Invoice Automation',
  //     description: 'Automated synchronization between Unicommerce and Zoho Books using Kafka and schedulers, handling 50K+ monthly orders and eliminating 80% manual bookkeeping.',
  //     tech: ['Kafka', 'Spring Boot', 'Schedulers', 'Zoho API', 'Unicommerce API'],
  //     link: '#'
  //   }
  // ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            Suryateja
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
            {/* <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li> */}
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Suryateja Sunkoju</span>
              <span className="role">Java Full Stack Developer</span>
            </h1>
            <p className="hero-description">
              Java Full Stack Developer with 3 years of experience in Spring Boot, Microservices, and Cloud technologies.
              Led monolith to microservices migration and reduced API latency by 90%.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={downloadResume}>
                <span>📥</span> Download Resume
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-animation">
            <div className="floating-elements">
              <div className="floating-element element-1 floating-element-image">
                <img src="https://e7.pngegg.com/pngimages/123/816/png-clipart-computer-icons-java-%E5%92%96%E5%95%A1%E6%B5%B7%E6%8A%A5%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90-miscellaneous-text.png" alt="Java" />
              </div>
              <div className="floating-element element-2" style={{ color: '#6DB33F' }}><SiSpring /></div>
              <div className="floating-element element-3" style={{ color: '#6366f1' }}><FaCogs /></div>
              <div className="floating-element element-4" style={{ color: '#231F20' }}><SiApachekafka /></div>
              <div className="floating-element element-5" style={{ color: '#4479A1' }}><SiMysql /></div>
              <div className="floating-element element-6" style={{ color: '#47A248' }}><SiMongodb /></div>
              <div className="floating-element element-7" style={{ color: '#DC382D' }}><SiRedis /></div>
              <div className="floating-element element-8" style={{ color: '#FF9900' }}><SiAmazonwebservices /></div>
              <div className="floating-element element-9" style={{ color: '#2496ED' }}><SiDocker /></div>
              <div className="floating-element element-10" style={{ color: '#61DAFB' }}><SiReact /></div>
              <div className="floating-element element-11" style={{ color: '#6DB33F' }}><FaLock /></div>
              <div className="floating-element element-12" style={{ color: '#59666C' }}><SiHibernate /></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Java Full Stack Developer with 3 years of experience specializing in Java, Spring Boot,
                Microservices architecture and React js. I have a proven track record of leading complex migrations,
                optimizing system performance, and building scalable solutions.
              </p>
              <p>
                My expertise includes designing and implementing microservices architectures, reducing API 
                latency by 90%, and automating critical business processes. I'm passionate about writing 
                clean, efficient code and solving complex technical challenges in healthcare enterprise applications.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>90%</h3>
                  <p>API Latency Reduction</p>
                </div>
                <div className="stat">
                  <h3>4</h3>
                  <p>projects worked on</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  {skill.iconUrl ? (
                    <span className="skill-icon skill-icon-image">
                      <img src={skill.iconUrl} alt={skill.name} />
                    </span>
                  ) : (
                    <span className="skill-icon" style={{ color: skill.color }}>
                      <IconComponent />
                    </span>
                  )}
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    >
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="timeline">
            {experiences.map((exp, index) => {
              return (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    {exp.logo && (
                      <div className="company-logo">
                        <img src={exp.logo} alt={`${exp.company} logo`} />
                      </div>
                    )}
                    <div className="timeline-header-text">
                      <span className="timeline-period">{exp.period}</span>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company} {exp.location && `• ${exp.location}`}</h4>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-content">
            <div className="education-item">
              <h3>B.Tech, Computer Science Engineering</h3>
              <h4>TKR College of Engineering and Technology, Hyderabad</h4>
              <span className="education-period">2017 – 2021</span>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <span className="cert-icon">🏆</span>
                  <div>
                    <h4>NPTEL Java</h4>
                    <p>Java Programming Certification</p>
                  </div>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🏆</span>
                  <div>
                    <h4>MongoDB Certified Developer</h4>
                    <p>MongoDB Database Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sunkojusuryateja@gmail.com">sunkojusuryateja@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917661806858">+91 7661806858</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="http://linkedin.com/in/suryateja-java-developer" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/suryateja-java-developer
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="http://github.com/suryatejasunkoju" target="_blank" rel="noopener noreferrer">
                    github.com/suryatejasunkoju
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="map-container">
            <h3>Location</h3>
            <iframe
              src="https://www.google.com/maps?q=Parvathnagar,+Kukatpally,+Hyderabad,+Telangana&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parvathnagar, Kukatpally, Hyderabad Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Suryateja Sunkoju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
