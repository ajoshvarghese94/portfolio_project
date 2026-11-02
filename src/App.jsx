import { useEffect } from "react";
import "./App.css";
import photo from "./assets/ajosh.jpg"; // put your photo at src/assets/ajosh.jpg

const EMAIL = "ajoshvarghese94@gmail.com";

const skillGroups = [
  {
    label: "Backend",
    title: ".NET Core and ASP.NET",
    text: "Services, APIs and web applications built for performance and maintainability.",
    core: [".NET Core", "ASP.NET"],
    more: ["C#", "REST APIs", "Entity Framework Core", "LINQ"],
  },
  {
    label: "Frontend",
    title: "React interfaces",
    text: "Responsive, interactive user interfaces connected to .NET back ends.",
    core: ["React"],
    more: ["JavaScript", "HTML and CSS"],
  },
  {
    label: "Data",
    title: "MySQL Server",
    text: "Schema design, queries and tuning for data-heavy business applications.",
    core: ["MySQL Server"],
    more: ["SQL"],
  },
  {
    label: "Desktop",
    title: ".NET Windows applications",
    text: "Desktop tools for day-to-day back-office and operations work.",
    core: [".NET Windows apps"],
    more: ["Visual Studio"],
  },
  {
    label: "Delivery",
    title: "Containers and tooling",
    text: "Consistent environments and a steady, collaborative workflow.",
    core: ["Docker"],
    more: ["Git", "Unit testing", "Agile and Scrum"],
  },
];

const builds = [
  { title: "Property and listing management", text: "Systems to record, search and maintain property data in one reliable place." },
  { title: "Web applications and APIs", text: "Secure ASP.NET back ends with React front ends for teams and customers." },
  { title: "Windows desktop tools", text: "Fast, focused desktop software for internal operations and daily workflows." },
  { title: "Data, reports and performance", text: "MySQL design and query tuning so reports and screens stay quick as data grows." },
];

const duties = [
  "Design, develop and maintain web applications and APIs using .NET Core and ASP.NET.",
  "Build responsive user interfaces with React that connect to .NET services.",
  "Create and support .NET Windows applications used in daily business operations.",
  "Design MySQL schemas and optimise queries for reliable performance.",
  "Containerise applications with Docker and collaborate with teams using Git and Agile practices.",
];

const stats = [
  ["8+", "Years in .NET development"],
  ["Real estate", "Core business domain"],
  ["Full stack", "API, database and UI"],
  ["Web + Desktop", "Application types delivered"],
];

export default function App() {
  // Scroll-reveal animation
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            Ajosh <i>Varghese</i>
          </a>
          <nav aria-label="Main">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#build">What I build</a>
            <a href="#experience">Experience</a>
            <a className="cta" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap" style={{ position: "relative" }}>
          <div className="glow" aria-hidden="true" />
          <div className="hero">
            <div className="rv">
              <div className="status"><b />Open to new opportunities</div>
              <h1>
                Senior .NET developer building <em>real estate</em> software.
              </h1>
              <p className="lede">
                I design and deliver dependable web and desktop applications with
                .NET Core, ASP.NET, React and MySQL, backed by more than eight years
                in the real estate domain.
              </p>
              <div className="btns">
                <a className="btn primary" href={`mailto:${EMAIL}`}>Get in touch</a>
                <a className="btn ghost" href="#experience">View experience</a>
              </div>
            </div>
            <figure className="portrait rv">
              <div className="ph">
                <img src={photo} alt="Portrait of Ajosh Varghese" width="640" height="640" />
              </div>
              <figcaption>Ajosh Varghese · .NET Developer</figcaption>
            </figure>
          </div>

          <div className="stats rv">
            {stats.map(([value, label]) => (
              <div className="stat" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap">
          <section id="about">
            <div className="about rv">
              <div>
                <span className="label">01 · About</span>
                <h2>Software that the business can rely on.</h2>
              </div>
              <div>
                <p>
                  I’m a .NET developer with over eight years of experience, most of it
                  in the real estate domain. I work across the whole stack, from
                  database design and server-side logic to React interfaces and
                  Windows desktop tools.
                </p>
                <p>
                  I focus on clean, maintainable code, clear communication with
                  stakeholders, and delivering features that fit how property teams
                  actually work.
                </p>
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="rv">
              <span className="label">02 · Skills</span>
              <h2>Technical expertise</h2>
              <p className="sub">
                The core stack I use every day, grouped by where it fits in an application.
              </p>
            </div>
            <div className="grid3">
              {skillGroups.map((g) => (
                <div className="card rv" key={g.title}>
                  <span className="num">{g.label}</span>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                  <div className="chips">
                    {g.core.map((s) => <span className="core" key={s}>{s}</span>)}
                    {g.more.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="build">
            <div className="rv">
              <span className="label">03 · Focus</span>
              <h2>What I build</h2>
              <p className="sub">Typical solutions in the real estate domain, delivered end to end.</p>
            </div>
            <div className="grid2">
              {builds.map((b, i) => (
                <div className="card rv" key={b.title}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <div className="rv">
              <span className="label">04 · Experience</span>
              <h2>Professional experience</h2>
            </div>
            <div className="timeline rv">
              <div className="role">
                <h3>Senior .NET Developer</h3>
                <span>8+ years</span>
              </div>
              <p className="domain">Real estate domain</p>
              <ul>
                {duties.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="box rv">
              <span className="label">05 · Contact</span>
              <h2>Let’s work together.</h2>
              <p className="sub">
                Hiring a .NET developer, or have a real estate software project in
                mind? I’d be glad to hear from you.
              </p>
              <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <div>
                <a className="btn primary" href={`mailto:${EMAIL}?subject=Hello%20Ajosh`}>Send an email</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Ajosh Varghese</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}