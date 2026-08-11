"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  ["01", "Node.js"],
  ["02", "Express.js"],
  ["03", "MongoDB"],
  ["04", "REST APIs"],
  ["05", "Socket.IO"],
  ["06", "Next.js"],
  ["07", "Firebase"],
  ["08", "Vercel"],
  ["09", "HTML"],
  ["10", "C"],
  ["11", "Figma"],
  ["12", "GitHub"],
  ["13", "Postman"],
];

const shots = [
  ["campus-01.png", "Profile & privacy settings"],
  ["campus-02.png", "Real-time group chat"],
  ["campus-03.png", "Notifications"],
  ["campus-04.png", "Campus Connect splash screen"],
  ["campus-05.png", "Group messages"],
  ["campus-06.png", "Campus feed"],
  ["campus-07.png", "Authentication"],
  ["campus-08.png", "Student profile"],
];

const projectStack = [
  "Next.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Socket.IO",
  "Firebase",
  "Vercel",
  "Postman"
];

const features = [
  {
    number: "01",
    title: "Student verification",
    description:
      "Only approved college email formats can register. Students verify their account using an OTP sent to their college email.",
  },
  {
    number: "02",
    title: "API + database architecture",
    description:
      "Created REST API routes/controllers and MongoDB collections for users, posts, comments, groups, messages, stories, events, notifications, reports and more.",
  },
  {
    number: "03",
    title: "Real-time + notifications",
    description:
      "Implemented real-time group communication with Socket.IO and integrated Firebase for notifications.",
  },
  {
    number: "04",
    title: "Admin moderation",
    description:
      "Built backend support for reporting, blocking and admin actions so unwanted student activity can be reviewed and controlled.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  /*
   * Reveal sections when they enter the viewport.
   */
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /*
   * Close image modal with Escape.
   */
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  /*
   * Prevent background scrolling while image modal is open.
   */
  useEffect(() => {
    document.body.style.overflow =
      activeImage !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      {/* Decorative background */}
      <div className="noise" aria-hidden="true" />

      <div className="ambient ambientA" aria-hidden="true" />
      <div className="ambient ambientB" aria-hidden="true" />

      {/* ================= NAVBAR ================= */}

      <nav className="nav">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span>M</span>
          <b>Meet Dholu</b>
        </a>

        <button
          className="menu"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`navlinks ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#project" onClick={closeMenu}>
            Project
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a className="navcta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero wrap">
        <div className="heroCopy">
          <div className="eyebrow">
            <i />
            AVAILABLE FOR FRESHER / FULL-TIME
          </div>

          <h1>
            Backend logic.
            <br />
            <em>Real-world</em>
            <br />
            products.
          </h1>

          <p className="heroText">
            I&apos;m Meet Dholu — a BCA graduate focused on backend and
            full-stack development. I enjoy building APIs, working with
            databases, authentication and real-time applications.
          </p>

          <div className="buttons">
            <a className="btn dark" href="#project">
              Explore my work
              <span>↓</span>
            </a>

            <a className="btn" href="#contact">
              Get in touch
              <span>↗</span>
            </a>
          </div>

          <div className="miniStats">
            <div>
              <b>01</b>
              <span>Featured project</span>
            </div>

            <div>
              <b>2026</b>
              <span>BCA graduate</span>
            </div>

            <div>
              <b>02</b>
              <span>Team members</span>
            </div>
          </div>
        </div>

        {/* Animated developer graphic */}

        <div className="heroArt" aria-hidden="true">
          <div className="gridSphere" />

          <div className="orbit orbit1" />
          <div className="orbit orbit2" />
          <div className="orbit orbit3" />

          <div className="coreGlow" />

          <div className="terminal">
            <div className="termTop">
              <span />
              <span />
              <span />

              <label>meet@portfolio:~</label>
            </div>

            <pre>
              <em>const</em> developer = {"{"}
              {"\n"} name: <strong>&quot;Meet Dholu&quot;</strong>,
              {"\n"} role: <strong>&quot;Backend Developer&quot;</strong>,
              {"\n"} stack: [
              <strong>&quot;Node.js&quot;</strong>,{" "}
              <strong>&quot;MongoDB&quot;</strong>],
              {"\n"} realtime: <strong>&quot;Socket.IO&quot;</strong>,
              {"\n"} status: <strong>&quot;open_to_work&quot;</strong>
              {"\n"}
              {"}"};
            </pre>

            <div className="cursor">▌</div>
          </div>

          <div className="floatCard c1">
            <span>⌘</span>
            REST APIs
          </div>

          <div className="floatCard c2">
            <span>◈</span>
            MongoDB
          </div>

          <div className="floatCard c3">
            <span>↯</span>
            Socket.IO
          </div>

          <div className="floatCard c4">
            <span>✓</span>
            JWT Auth
          </div>
        </div>
      </section>

      {/* ================= TECH MARQUEE ================= */}

      <div className="marquee" aria-hidden="true">
        <div>
          BACKEND • APIS • DATABASES • REAL-TIME • FULL-STACK • BACKEND •
          APIS • DATABASES • REAL-TIME • FULL-STACK • BACKEND • APIS •
          DATABASES • REAL-TIME • FULL-STACK •
        </div>
      </div>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="wrap section lineTop reveal"
      >
        <div className="label">01 — ABOUT</div>

        <div className="two">
          <h2>
            I like building the part users{" "}
            <em>don&apos;t see.</em>
          </h2>

          <div className="body">
            <p>
              I&apos;m a recent BCA graduate from{" "}
              <b>
                Sanskar Institute of Management and Information
                Technology
              </b>
              , affiliated with Kachchh University.
            </p>

            <p>
              My strongest interest is backend development. I like
              understanding how data moves through an application, how
              APIs are designed, how authentication works and how
              real-time features stay reliable.
            </p>

            <p>
              Campus Connect gave me practical experience working on a
              real multi-feature social application with another
              developer.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="wrap section reveal"
      >
        <div className="head">
          <div>
            <div className="label">02 — SKILLS</div>

            <h2>
              My current toolkit<span>.</span>
            </h2>
          </div>

          <p>
            Focused on backend fundamentals, practical APIs and
            full-stack growth.
          </p>
        </div>

        <div className="skillGrid">
          {skills.map(([number, skill]) => (
            <div className="skill" key={skill}>
              <span>{number}</span>

              <b>{skill}</b>

              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECT ================= */}

      <section
        id="project"
        className="wrap section lineTop reveal"
      >
        <div className="head">
          <div>
            <div className="label">
              03 — FEATURED PROJECT
            </div>

            <h2>
              Campus Connect<span>.</span>
            </h2>
          </div>

          <div className="tag">
            COLLEGE SOCIAL NETWORK
          </div>
        </div>

        {/* Project showcase */}

        <div className="projectHero">
          <div className="projectVisual">
            <div className="projectGlow" />

            {/* Background screenshot */}

            <div className="phone phoneBack">
              <Image
                src="/project/campus-02.png"
                alt="Campus Connect group chat"
                fill
                sizes="240px"
              />
            </div>

            {/* Main screenshot */}

            <div className="phone phoneFront">
              <Image
                src="/project/campus-06.png"
                alt="Campus Connect feed"
                fill
                sizes="280px"
              />
            </div>

            <div className="phoneBadge">
              CAMPUS
              <br />
              <b>CONNECT</b>
            </div>
          </div>

          <div className="projectIntro">
            <p className="big">
              A private social media platform created specifically
              for college students — with student-only registration,
              posts, stories, groups, chat, events, announcements and
              moderation.
            </p>

            <div className="roles">
              <div>
                <small>MY ROLE</small>
                <b>Backend + Database</b>
              </div>

              <div>
                <small>TEAM</small>
                <b>2 members</b>
              </div>

              <div>
                <small>FRONTEND</small>
                <b>Flutter by teammate</b>
              </div>
            </div>

            <div className="stack">
              <small>CORE STACK</small>

              <div>
                {projectStack.map((technology) => (
                  <i key={technology}>{technology}</i>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project features */}

        <div className="features">
          {features.map((feature) => (
            <div key={feature.number}>
              <span>{feature.number}</span>

              <section>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </section>
            </div>
          ))}
        </div>

        {/* Screenshot gallery */}

        <div className="gallery">
          {shots.map((s, i) => (
            <button
              className="shot"
              key={s[0]}
              onClick={() => setActiveImage(i)}
            >
              <Image
                src={`/project/${s[0]}`}
                alt={s[1]}
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
                loading="lazy"
              />
              <span>{s[1]}</span>
            </button>
          ))}
        </div>

        {/* Project bottom information */}

        <div className="projectFoot">
          <p>
            <b>My backend contribution:</b>{" "}
            OTP verification · authentication · JWT/session handling
            · MongoDB · REST APIs · CRUD · Socket.IO · Firebase
            notifications · reports · admin moderation.
          </p>

          <div className="buttons">
            <a
              className="btn dark"
              href="https://github.com/meet-dholu/campus-connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="wrap section reveal"
      >
        <div className="label">04 — EDUCATION</div>

        <div className="edu">
          <div className="date">
            JUL 2023
            <br />
            ↓
            <br />
            APR 2026
          </div>

          <div>
            <small>BACHELOR OF COMPUTER APPLICATIONS</small>

            <h2>
              Sanskar Institute of Management and Information
              Technology
            </h2>

            <p>Under Kachchh University</p>
          </div>

          <div className="score">
            <b>63%</b>
            <span>OVERALL</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="wrap section contact lineTop reveal"
      >
        <div>
          <div className="label">05 — CONTACT</div>

          <h2>
            Ready for the
            <br />
            <em>next opportunity.</em>
          </h2>

          <p>
            I&apos;m looking for a fresher/full-time role where I can
            grow as a backend or full-stack developer and contribute
            to real software.
          </p>
        </div>

        <div className="contactList">
          <a href="mailto:meet.dholu@example.com">
            <span>EMAIL</span>
            <b>meet.dholu@example.com ↗</b>
          </a>

          <a
            href="https://github.com/meet-dholu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
            <b>github.com/meet-dholu ↗</b>
          </a>

          <a
            href="https://www.linkedin.com/in/meet-dholu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LINKEDIN</span>
            <b>linkedin.com/in/meet-dholu ↗</b>
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="wrap">
        <span>© 2026 Meet Dholu</span>

        <span>
          Backend · Full-Stack · Always learning
        </span>
      </footer>

      {/* ================= IMAGE MODAL ================= */}

      {activeImage !== null && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={shots[activeImage][1]}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>

          <div
            className="modalImg"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={`/project/${shots[activeImage][0]}`}
              alt={shots[activeImage][1]}
              fill
              sizes="90vw"
            />

            <p>{shots[activeImage][1]}</p>
          </div>
        </div>
      )}
    </main>
  );
}