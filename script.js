<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="utf-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>My Portfolio — Pavithra P</title>

  <!-- Simple, clean styling -->

  <style>

    :root{

      --bg: #f4f6f8;

      --card: #ffffff;

      --accent: #2c3e50;

      --muted: #6b7280;

      --shadow: rgba(2,6,23,0.08);

      --radius: 10px;

      --max-width: 900px;

    }

    *{box-sizing: border-box}

    body{

      margin:0;

      font-family: "Arial", sans-serif;

      background: var(--bg);

      color:#222;

      -webkit-font-smoothing:antialiased;

      -moz-osx-font-smoothing:grayscale;

      line-height:1.5;

    }

    /* Header & Nav */

    header{

      background: var(--accent);

      color: #fff;

      padding: 22px 16px;

      text-align: center;

      position: sticky;

      top: 0;

      z-index: 40;

    }

    header h1{ margin:0; font-size:1.45rem; letter-spacing:0.3px; }

    header p{ margin:6px 0 0; opacity:0.9; font-size:0.95rem; }

    .container{

      max-width: var(--max-width);

      margin: 20px auto;

      padding: 0 16px;

    }

    /* Nav */

    nav.topnav{

      display:flex;

      gap:12px;

      justify-content:center;

      align-items:center;

      background: #34495e;

      padding:10px;

    }

    nav.topnav a{

      color:#fff;

      text-decoration:none;

      font-weight:600;

      margin:0 8px;

      font-size:0.95rem;

    }

    /* mobile nav toggle */

    .nav-toggle{

      display:none;

      position:absolute;

      right:18px;

      top:18px;

      background:transparent;

      border:2px solid rgba(255,255,255,0.15);

      color:white;

      padding:8px 10px;

      border-radius:8px;

      cursor:pointer;

    }

    /* Sections (cards) */

    section.card{

      background: var(--card);

      padding: 26px;

      margin-top: 20px;

      border-radius: var(--radius);

      box-shadow: 0 6px 18px var(--shadow);

    }

    section.card h2{ color:var(--accent); margin-top:0; }

    p.lead{ color:var(--muted); margin:10px 0 0; }

    /* Skills list */

    .skills{ list-style:none; padding:0; margin:12px 0 0; display:flex; flex-wrap:wrap; gap:8px; }

    .skills li{

      background:#eef2f6;

      padding:8px 12px;

      border-radius:999px;

      font-weight:600;

      font-size:0.9rem;

      color:var(--accent);

    }

    /* Projects */

    .projects-list{ list-style:none; padding:0; margin:12px 0 0; display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:12px; }

    .project{

      border-radius:8px;

      padding:12px;

      background: linear-gradient(180deg,#fff,#fbfdff);

      border:1px solid rgba(30,40,50,0.04);

    }

    .project b{ display:block; margin-bottom:6px; color: #15324b; }

    .project p{ margin:0; color:var(--muted); font-size:0.95rem; }

    /* Contact */

    form.contact-form{ display:grid; gap:8px; max-width:520px; }

    form input, form textarea{

      padding:10px 12px;

      border:1px solid #d7dbe0;

      border-radius:8px;

      font-size:0.95rem;

      resize:vertical;

    }

    form button{

      padding:10px 14px;

      border:0;

      border-radius:8px;

      background:var(--accent);

      color:white;

      cursor:pointer;

      font-weight:600;

    }

    .muted{ color:var(--muted); font-size:0.92rem; }

    footer{

      text-align:center;

      padding:18px 10px;

      color:#fff;

      background:var(--accent);

      margin-top:28px;

    }

    /* Responsive adjustments */

    @media (max-width:720px){

      nav.topnav{ display:none; }

      .nav-toggle{ display:block; }

      .mobile-nav{

        display:none;

        background:#34495e;

        padding:10px 16px;

      }

      .mobile-nav a{ display:block; padding:8px 0; color:white; text-decoration:none; font-weight:700; }

    }

  </style>

</head>

<body>

  <header>

    <button class="nav-toggle" aria-expanded="false">Menu ☰</button>

    <h1>My Portfolio — Pavithra P</h1>

    <p>College Student • Aspiring Developer</p>

  </header>

  <!-- Desktop nav -->

  <nav class="topnav" aria-label="Main navigation">

    <a href="#about">About</a>

    <a href="#skills">Skills</a>

    <a href="#projects">Projects</a>

    <a href="#contact">Contact</a>

  </nav>

  <!-- Mobile nav -->

  <nav class="mobile-nav" aria-hidden="true"></nav>

  <main class="container">

    <section id="about" class="card">

      <h2>About Me</h2>

      <p class="lead">Hello! I am <strong>Pavithra P</strong>, passionate about web development and programming. I enjoy learning new technologies and building creative projects.</p>

    </section>

    <section id="skills" class="card">

      <h2>My Skills</h2>

      <ul class="skills" aria-label="skills list">

        <li>HTML</li>

        <li>CSS</li>

        <li>JavaScript</li>

        <li>Python</li>

        <li>Java</li>

        <li>MySQL</li>

        <li>Problem Solving</li>

        <li>Teamwork</li>

      </ul>

    </section>

    <section id="projects" class="card">

      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">

        <h2 style="margin:0">Projects</h2>

        <div>

          <label class="muted" for="filter">Filter:</label>

          <select id="filter" aria-label="Filter projects">

            <option value="all">All</option>

            <option value="web">Web</option>

            <option value="java">Java</option>

            <option value="api">API</option>

          </select>

        </div>

      </div>

      <p class="muted">Here are some projects I worked on:</p>

      <ul class="projects-list" id="projectsList">

        <li class="project" data-type="web">

          <b>Personal Portfolio</b>

          <p>A simple responsive website to showcase my skills and projects.</p>

        </li>

        <li class="project" data-type="java">

          <b>Student Management System</b>

          <p>Mini project using Java & MySQL for CRUD operations and simple UI.</p>

        </li>

        <li class="project" data-type="web">

          <b>Weather App</b>

          <p>Web app consuming a weather API using JavaScript to show forecasts.</p>

        </li>

        <li class="project" data-type="api">

          <b>Notes API</b>

          <p>Simple REST API built for note-taking with authentication (learning project).</p>

        </li>

      </ul>

    </section>

    <section id="contact" class="card">

      <h2>Contact Me</h2>

      <p class="muted">Email: <a href="mailto:Pavithraabitha029@gmail.com">Pavithraabitha029@gmail.com</a></p>

      <p class="muted">LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">linkedin.com/in/pavithra-p</a></p>

      <p class="muted">Phone: <a href="tel:+918668109829">+91 8668109829</a></p>

      <hr style="margin:14px 0; border:none; height:1px; background:#eef2f6;">

      <form id="contactForm" class="contact-form" novalidate>

        <input id="name" name="name" placeholder="Your name" required />

        <input id="email" name="email" type="email" placeholder="Your email" required />

        <textarea id="message" name="message" rows="5" placeholder="Message (min 10 chars)" required></textarea>

        <div style="display:flex; gap:10px; align-items:center;">

          <button type="submit">Send Message</button>

          <div id="formStatus" class="muted" aria-live="polite"></div>

        </div>

      </form>

    </section>

  </main>

  <footer>

    <p>© 2025 Pavithra P | All Rights Reserved</p>

  </footer>

  <!-- JavaScript: nav toggle, smooth scroll, form validation, project filter -->

  <script>

    // Mobile nav creation & toggle

    (function(){

      const toggle = document.querySelector('.nav-toggle');

      const mobileNav = document.querySelector('.mobile-nav');

      const desktopLinks = document.querySelectorAll('nav.topnav a');

      desktopLinks.forEach(a=>{

        const link = document.createElement('a');

        link.href = a.href;

        link.textContent = a.textContent;

        mobileNav.appendChild(link);

      });

      toggle.addEventListener('click', () => {

        const expanded = toggle.getAttribute('aria-expanded') === 'true';

        toggle.setAttribute('aria-expanded', String(!expanded));

        if (mobileNav.style.display === 'block'){

          mobileNav.style.display = 'none';

          mobileNav.setAttribute('aria-hidden','true');

        } else {

          mobileNav.style.display = 'block';

          mobileNav.setAttribute('aria-hidden','false');

        }

      });

      mobileNav.addEventListener('click', (e) => {

        if (e.target.tagName === 'A') {

          mobileNav.style.display = 'none';

          toggle.setAttribute('aria-expanded', 'false');

        }

      });

    })();

    // Smooth scroll

    (function(){

      const links = document.querySelectorAll('a[href^="#"]');

      links.forEach(link=>{

        link.addEventListener('click', (e)=>{

          const targetId = link.getAttribute('href').slice(1);

          const target = document.getElementById(targetId);

          if (target){

            e.preventDefault();

            target.scrollIntoView({behavior:'smooth', block:'start'});

          }

        });

      });

    })();

    // Contact form validation

    (function(){

      const form = document.getElementById('contactForm');

      const status = document.getElementById('formStatus');

      function isValidEmail(email){

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      }

      form.addEventListener('submit', (e)=>{

        e.preventDefault();

        status.textContent = '';

        const name = form.name.value.trim();

        const email = form.email.value.trim();

        const message = form.message.value.trim();

        if (name.length < 2){

          status.textContent = 'Please enter your name.';

          return;

        }

        if (!isValidEmail(email)){

          status.textContent = 'Please enter a valid email.';

          return;

        }

        if (message.length < 10){

          status.textContent = 'Message should be at least 10 characters.';

          return;

        }

        status.textContent = '✅ Message sent successfully!';

        form.reset();

      });

    })();

  </script>

</body>

</html>