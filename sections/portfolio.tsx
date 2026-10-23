"use client";

import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Activity, Boxes,
  Building2, Check, ChevronDown, Code2, Cpu, Database, Download, Github,
  Globe2, GraduationCap, HeartHandshake, Linkedin, LockKeyhole, Mail, MapPin, Menu,
  Network, RadioTower, Server, ShieldCheck, Sparkles, Terminal, Wifi, X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { SITE } from "@/lib/site";
import type { Capability, ExperienceItem, SkillGroup } from "@/types/portfolio";

const nav = [["About", "about"], ["Work", "work"], ["Experience", "experience"], ["Contact", "contact"]] as const;

const capabilities: Capability[] = [
  { icon: Code2, n: "01", title: "Software development", text: "Useful applications, APIs and data-backed products built with a focus on clarity and maintainability." },
  { icon: Network, n: "02", title: "Network engineering", text: "Practical network setup, device configuration and troubleshooting across wired and wireless environments." },
  { icon: HeartHandshake, n: "03", title: "Technical support", text: "Patient, structured problem solving that gets users and their systems back to work." },
  { icon: Server, n: "04", title: "Systems administration", text: "Endpoint deployment, account management, Microsoft 365 and day-to-day systems care." },
  { icon: RadioTower, n: "05", title: "IT infrastructure", text: "Reliable foundations across hardware, connectivity, operations and service delivery." },
  { icon: Activity, n: "06", title: "Data & analytics", text: "Turning operational and financial information into useful metrics, reporting and insight." },
];

const skills: SkillGroup[] = [
  { title: "Programming", items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
  { title: "Frameworks", items: ["FastAPI", "React", "Next.js"] },
  { title: "Data & databases", items: ["MariaDB", "MySQL", "SQLite", "SQLAlchemy", "Data analytics"] },
  { title: "Networks", items: ["TCP/IP", "Routing", "Switching", "Troubleshooting", "Wireless", "MikroTik", "Huawei", "Starlink deployments"] },
  { title: "IT operations", items: ["Windows", "Microsoft 365", "Active Directory", "Hardware support", "Technical support", "IT infrastructure"] },
  { title: "Tools & practice", items: ["Git", "GitHub", "VS Code", "Linux", "Cybersecurity fundamentals", "Cloud technologies"] },
];

const experience: ExperienceItem[] = [
  {
    index: "01", company: "Communications Authority of Kenya", role: "Industrial Attachment", period: "Public sector · Telecommunications", icon: RadioTower,
    intro: "Worked across ICT support and operations in a national telecommunications regulator, gaining both hands-on technical experience and exposure to the regulatory environment.",
    points: ["Supported Windows deployment, Active Directory, Microsoft 365 and domain administration.", "Resolved user, printer, hardware, network and IP configuration issues; assisted with BitLocker recovery and system maintenance.", "Gained exposure to telecommunications regulation, spectrum management, licensing, compliance, field inspections and stakeholder engagement."],
  },
  {
    index: "02", company: "Consolidated Bank of Kenya", role: "Attachment · Quality Service Team", period: "Financial services · Customer operations", icon: Building2,
    intro: "Built a customer-first view of how dependable service and well-run processes support a highly operational business.",
    points: ["Engaged with customers and communicated professionally across service interactions.", "Observed banking operations and contributed to service excellence and process improvement.", "Collaborated across functions—adding business and customer context to a technical foundation."],
  },
];

function ProjectVisual({ kind }: { kind: "budget" | "network" }) {
  if (kind === "budget") return (
    <div className="project-visual budget-visual" aria-hidden="true">
      <div className="visual-bar"><span className="visual-logo"><Sparkles size={13} /> NeuroBudget</span><span className="visual-pill">Overview&nbsp; / &nbsp;October</span></div>
      <div className="visual-metric-row"><div className="visual-metric"><small>MONTHLY INCOME</small><b>KSh 184,500</b><span>↑ 8.2% this month</span></div><div className="visual-metric"><small>FINANCIAL HEALTH</small><b>82 <em>/100</em></b><span>Looking steady</span></div></div>
      <div className="chart-box"><div className="chart-label"><span>Income & spending</span><span className="legend"><i /> Income <i className="legend-purple" /> Spending</span></div><svg viewBox="0 0 420 100" preserveAspectRatio="none"><path d="M0 76 C38 64 42 48 78 56 S120 74 156 44 S210 62 244 30 S292 48 326 36 S380 54 420 20" fill="none" stroke="#b5f76a" strokeWidth="2.5"/><path d="M0 84 C40 80 55 70 84 76 S132 60 164 72 S210 80 246 64 S298 72 326 56 S382 66 420 52" fill="none" stroke="#9b8cff" strokeWidth="2" strokeDasharray="5 5"/><path d="M0 76 C38 64 42 48 78 56 S120 74 156 44 S210 62 244 30 S292 48 326 36 S380 54 420 20 V100 H0Z" fill="url(#chartFill)" opacity=".12"/><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#b5f76a"/><stop offset="1" stopColor="#b5f76a" stopOpacity="0"/></linearGradient></defs></svg><div className="chart-months"><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span></div></div>
      <div className="visual-bottom"><span><span className="tiny-dot" /> spending patterns</span><span>Healthy trend <ArrowUpRight size={12} /></span></div>
    </div>
  );
  return (
    <div className="project-visual network-visual" aria-hidden="true">
      <div className="visual-bar"><span className="visual-logo"><Activity size={13} /> NETWATCH <small> / MONITOR</small></span><span className="live-tag"><i /> SYSTEM LIVE</span></div>
      <div className="network-topline"><div><small>MANAGED DEVICES</small><b>24 <em>devices</em></b></div><div><small>AVAILABILITY</small><b>99.2<em>%</em></b></div><div><small>ACTIVE ALERTS</small><b className="green-num">02</b></div></div>
      <div className="device-table"><div className="device-head"><span>DEVICE / LOCATION</span><span>LATENCY</span><span>STATUS</span></div>{[["Core Router", "Network room", "12 ms", "Online"], ["Access Point · 03", "Floor 2", "24 ms", "Online"], ["Branch Gateway", "Westlands", "—", "Alert"]].map(([name, loc, ping, status]) => <div className="device-row" key={name}><span><i className={status === "Alert" ? "alert-dot" : ""} /> <b>{name}</b><small>{loc}</small></span><span>{ping}</span><span className={status === "Alert" ? "status-alert" : "status-online"}>{status}</span></div>)}</div>
      <div className="network-foot"><span><span className="tiny-dot" /> Next check in 00:18</span><span>Polling interval · 30s</span></div>
    </div>
  );
}

export default function Portfolio() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const progress = useScrollProgress();
  const closeMenu = () => setMenuOpen(false);
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Collins Njagi, home"><span>CS</span><small>ENGINEER & BUILDER</small></a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="home">
        <section className="hero wrap">
          <div className="hero-grid-glow" aria-hidden="true" />
          <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <div className="availability"><span className="availability-dot" /> COMPUTER SCIENTIST <span className="availability-sep">·</span> NAIROBI, KENYA</div>
            <h1>Building reliable software, resilient networks <span>and practical technology solutions.</span></h1>
            <p className="hero-sub">I enjoy solving real-world problems through software engineering, networking, systems administration and data-driven solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View projects <ArrowDownRight size={16} /></a>
              <a className="button button-quiet" href="/collins-steve-njagi-cv.pdf" download>Download CV <Download size={15} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/csnjagi" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>
              <a href="https://www.linkedin.com/in/collins-njagia57984278" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
              <a href="mailto:csnjagi@proton.me"><Mail size={15} /> Email</a>
            </div>
          </motion.div>
          <motion.div className="hero-art" initial={reduce ? false : { opacity: 0, scale: .97, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .85, delay: .12 }}>
            <div className="portrait-frame"><div className="portrait-meta"><span>NAIROBI <span className="portrait-coord">01°17′S · 36°49′E</span></span><span className="portrait-index">CSN / 2026</span></div><div className="portrait-image"><img src="/images/me-main.webp" alt="Collins Steve Njagi, computer scientist and software developer" fetchPriority="high" /><div className="portrait-image-tint" /></div><div className="portrait-caption"><div className="portrait-initial">CN</div><div><b>Collins Steve Njagi</b><span>Software · Networks · Systems</span></div><span className="portrait-mark">↗</span></div></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="float-label float-label-top"><span className="float-icon"><Code2 size={15} /></span><span><b>Software</b><small>built with purpose</small></span></div><div className="float-label float-label-bottom"><span className="float-icon float-icon-lime"><Network size={15} /></span><span><b>Infrastructure</b><small>built to stay up</small></span></div>
          </motion.div>
          <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={14} /></a>
          <div className="hero-side-note">SOFTWARE ENGINEERING <span>×</span> NETWORK OPERATIONS</div>
        </section>

        <section className="signal-strip" aria-label="Professional focus"><div className="signal-inner wrap"><span>From the service desk</span><i /><span>to the network edge</span><i /><span>to the application layer</span><i /><span className="signal-highlight">I think in systems.</span></div></section>

        <section className="section wrap about-section" id="about">
          <SectionHeading number="01" eyebrow="A little about me" title={<>Technology is at its best<br className="desktop-break" /> when it works <em>for people.</em></>} description="A computer scientist with a hands-on IT background and a practical instinct for making systems work better." />
          <div className="about-grid">
            <Reveal className="about-story"><p className="story-lead">I’m Collins, a software developer, network engineer and IT professional based in Nairobi, Kenya.</p><p>My experience spans software development, network engineering, systems administration, technical support, IT infrastructure and cybersecurity fundamentals. I’ve also worked with data analytics, database development, cloud technologies and IT operations.</p><p>From helping users stay productive to building applications that make information useful, I like getting to the root of a problem and building a solution that holds up. I’m especially interested in scalable systems and solving business problems through technology.</p><div className="about-signoff"><span className="signoff-rule" /><span>Curious by nature. Practical by design.</span></div></Reveal>
            <Reveal className="about-photo-grid" delay={.1}><figure className="photo-large"><img src="/images/portrait-casual.webp" alt="Collins outside at a professional event" loading="lazy"/><figcaption>Always learning, always building.</figcaption></figure><figure className="photo-tall"><img src="/images/portrait-glasses.webp" alt="Collins smiling" loading="lazy" /></figure><figure className="photo-small"><img src="/images/portrait-blue.webp" alt="Collins in a blue shirt" loading="lazy" /></figure><div className="photo-location"><MapPin size={13} /> NAIROBI, KENYA</div></Reveal>
          </div>
          <Reveal className="service-label-row"><span>WHAT I BRING</span><span className="service-label-line"/><span>TECHNICAL RANGE <span className="muted-slash">/</span> BUSINESS CONTEXT</span></Reveal>
          <div className="capability-grid">{capabilities.map(({ icon: Icon, n, title, text }, index) => <Reveal key={n} delay={index * .045}><article className="capability-card"><div className="capability-card-top"><span className="capability-icon"><Icon size={17} strokeWidth={1.65}/></span><span className="capability-index">{n}</span></div><h3>{title}</h3><p>{text}</p><ArrowUpRight size={14} className="capability-arrow"/></article></Reveal>)}</div>
        </section>

        <section className="section projects-section" id="work"><div className="wrap"><SectionHeading number="02" eyebrow="Selected work" title={<>Built to solve <em>real problems.</em></>} description="A couple of projects that bring application development, data and infrastructure together." />
          <div className="projects-list">
            <Reveal><article className="project-card"><div className="project-visual-shell"><ProjectVisual kind="budget"/><span className="visual-corner-note">ILLUSTRATIVE UI / MOCK DATA</span></div><div className="project-info"><div className="project-overline"><span>01 — PERSONAL FINANCE</span><span className="project-status"><i/> FEATURED PROJECT</span></div><h3>NeuroBudget</h3><p className="project-blurb">A personal finance platform designed to make spending patterns easier to understand—and financial decisions more informed.</p><div className="project-details"><div><span className="detail-label">THE BUILD</span><p>FastAPI and SQLAlchemy power the API and data layer; a responsive HTML, CSS and JavaScript interface presents the financial picture through clear metrics and charts.</p></div><div><span className="detail-label">WHAT IT DOES</span><p>JWT sign-in, income and expense tracking, monthly summaries, savings and financial-health metrics, with README-documented anomaly analysis and AI advice.</p></div></div><div className="project-tags">{["Python", "FastAPI", "SQLAlchemy", "MariaDB", "JavaScript", "Chart.js"].map((x) => <span key={x}>{x}</span>)}</div><div className="project-note"><Sparkles size={14}/><span>The README outlines Z-score spending anomaly detection and a GPT-4o mini advisor with multi-session chat; the repository’s current API entry point wires authentication, income and expense routes. README next steps include forecasting, Open Banking, downloadable reports and mobile access.</span></div><a className="text-link" href="https://github.com/csnjagi/NeuroBudget" target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={15}/></a></div></article></Reveal>
            <Reveal delay={.08}><article className="project-card project-card-reverse"><div className="project-visual-shell"><ProjectVisual kind="network"/><span className="visual-corner-note">ILLUSTRATIVE UI / MOCK DATA</span></div><div className="project-info"><div className="project-overline"><span>02 — NETWORK OPERATIONS</span><span className="project-status"><i/> FEATURED PROJECT</span></div><h3>Network Monitoring</h3><p className="project-blurb">An operations dashboard that turns device health checks into a live view of availability, latency and network alerts.</p><div className="project-details"><div><span className="detail-label">THE BUILD</span><p>A modular FastAPI application separates routers, services, models and background monitoring, backed by SQLAlchemy and SQLite with PostgreSQL-ready Docker deployment.</p></div><div><span className="detail-label">WHAT IT DOES</span><p>Ping checks run every 30 seconds, track latency and packet loss, and raise alerts for offline devices, packet loss above 20% or latency over 300 ms.</p></div></div><div className="project-tags">{["Python", "FastAPI", "SQLAlchemy", "SQLite / PostgreSQL", "Docker", "Bootstrap", "Chart.js"].map((x) => <span key={x}>{x}</span>)}</div><div className="project-note"><Activity size={14}/><span>Admin and viewer roles, historical monitoring records, CSV/PDF reports and a tested device-management API round out the monitoring workflow. Potential next steps include configurable thresholds, notification integrations and distributed polling.</span></div><a className="text-link" href="https://github.com/csnjagi/Network-Monitoring" target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={15}/></a></div></article></Reveal>
          </div>
          <div className="future-row"><div className="future-label"><span className="eyebrow"><span>03</span><i/> NEXT UP</span><h3>More good work<br/>is on the way.</h3><p>I’m always exploring the next useful thing to build.</p></div><div className="future-card"><span className="future-number">03</span><div className="future-orbit"><Boxes size={24}/></div><span className="future-chip">IN PROGRESS</span><h4>Something practical</h4><p>New case study coming soon</p><div className="future-bottom"><span>DESIGN → BUILD → LEARN</span><ArrowUpRight size={14}/></div></div><div className="future-card future-card-muted"><span className="future-number">04</span><div className="future-orbit"><Globe2 size={24}/></div><span className="future-chip">EXPLORING</span><h4>A new challenge</h4><p>Ideas in the making</p><div className="future-bottom"><span>STAY CURIOUS</span><ArrowUpRight size={14}/></div></div></div>
        </div></section>

        <section className="section wrap experience-section" id="experience"><SectionHeading number="03" eyebrow="Experience" title={<>Different environments.<br/>One <em>systems mindset.</em></>} description="Technical depth is stronger when it’s grounded in how people and organisations actually work." />
          <div className="experience-list">{experience.map(({ index, company, role, period, icon: Icon, intro, points }) => <Reveal key={company}><article className="experience-card"><div className="experience-aside"><span className="experience-number">{index}</span><div className="experience-icon"><Icon size={20}/></div><span className="experience-line"/></div><div className="experience-main"><div className="experience-meta"><span>{period}</span><span className="experience-type">PROFESSIONAL EXPERIENCE</span></div><h3>{company}</h3><div className="experience-role">{role}</div><p className="experience-intro">{intro}</p><ul>{points.map((point) => <li key={point}><Check size={14}/><span>{point}</span></li>)}</ul></div></article></Reveal>)}</div>
        </section>

        <section className="achievements-section"><div className="wrap"><SectionHeading number="04" eyebrow="Milestones & momentum" title={<>Experience that adds up<br/>to <em>more perspective.</em></>} description="A few markers across education, hands-on service and the systems I’ve built."/><div className="achievement-grid"><Reveal><article className="achievement-card achievement-feature"><span className="achievement-index">01 / PUBLIC SERVICE</span><div className="achievement-icon"><RadioTower size={18}/></div><h3>Communications Authority of Kenya</h3><p>Industrial attachment across ICT operations, with additional exposure to telecommunications regulation and spectrum management.</p><span className="achievement-foot">TECHNICAL + REGULATORY EXPOSURE</span></article></Reveal><Reveal delay={.05}><article className="achievement-card"><span className="achievement-index">02 / BUSINESS</span><div className="achievement-icon achievement-lavender"><Building2 size={18}/></div><h3>Banking operations experience</h3><p>Quality service team attachment at Consolidated Bank of Kenya.</p><span className="achievement-foot">CUSTOMER-CENTRED OPERATIONS</span></article></Reveal><Reveal delay={.1}><article className="achievement-card"><span className="achievement-index">03 / NETWORKS</span><div className="achievement-icon"><Activity size={18}/></div><h3>Network engineering projects</h3><p>Designed a monitoring dashboard around device availability, latency, packet loss and alerts.</p><span className="achievement-foot">MONITOR · UNDERSTAND · RESPOND</span></article></Reveal><Reveal delay={.15}><article className="achievement-card"><span className="achievement-index">04 / SOFTWARE</span><div className="achievement-icon achievement-lavender"><Code2 size={18}/></div><h3>Software development projects</h3><p>Built practical application work across APIs, data, analytics and user-facing interfaces.</p><span className="achievement-foot">FROM PROBLEM TO PRODUCT</span></article></Reveal><Reveal delay={.2}><article className="achievement-card achievement-wide"><span className="achievement-index">05 / EDUCATION</span><div className="achievement-icon"><GraduationCap size={18}/></div><h3>Continuous learning</h3><p>Bachelor of Science in Computer Science at Moi University, class of 2026—with a growing toolkit across software, networks and IT operations.</p><span className="achievement-foot">STAYING CURIOUS, BUILDING SKILL</span></article></Reveal></div></div></section>

        <section className="skills-section"><div className="wrap skills-wrap"><SectionHeading number="05" eyebrow="Tools of the trade" title={<>The right tool for<br/>the <em>actual problem.</em></>} description="A growing toolkit across software, data and IT operations."/><div className="skill-grid">{skills.map((group, index) => <Reveal key={group.title} delay={(index % 3) * .06}><article className="skill-card"><div className="skill-card-top"><span className="skill-symbol">{index === 0 ? <Terminal/> : index === 1 ? <Boxes/> : index === 2 ? <Database/> : index === 3 ? <Wifi/> : index === 4 ? <Cpu/> : <ShieldCheck/>}</span><span className="skill-count">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div><div className="skill-footnote"><LockKeyhole size={13}/><span>Cybersecurity fundamentals · Cloud technologies · Secure, dependable operations</span></div></div></section>

        <section className="section wrap education-section"><SectionHeading number="06" eyebrow="The path so far" title={<>Grounded in learning.<br/><em>Looking forward.</em></>} description="A foundation in computer science, broadened through hands-on work and a commitment to keep growing."/><div className="timeline"><div className="timeline-rail"><span className="timeline-track"/><span className="timeline-pulse"/></div><Reveal><article className="timeline-item"><span className="timeline-kicker">FOUNDATION</span><div className="timeline-icon"><GraduationCap size={18}/></div><div className="timeline-copy"><div className="timeline-top"><span>EDUCATION</span><span>MOI UNIVERSITY</span></div><h3>Bachelor of Science in Computer Science</h3><p>Building foundations in computing, software development and problem solving. Celebrated with the Moi University class of 2026.</p><div className="education-photo"><img src="/images/moi-class.webp" alt="Moi University class of 2026" loading="lazy"/><span>MOI UNIVERSITY · CLASS OF 2026</span></div></div></article></Reveal><Reveal delay={.06}><article className="timeline-item"><span className="timeline-kicker">FIELD EXPERIENCE</span><div className="timeline-icon timeline-icon-green"><RadioTower size={18}/></div><div className="timeline-copy"><div className="timeline-top"><span>COMMUNICATIONS AUTHORITY OF KENYA</span><span>INDUSTRIAL ATTACHMENT</span></div><h3>Technology that keeps services connected.</h3><p>Hands-on ICT operations experience paired with insight into telecommunications regulation, spectrum, compliance and field activity.</p><div className="timeline-tags"><span>ICT OPERATIONS</span><span>NETWORK SUPPORT</span><span>TELECOMS REGULATION</span></div></div></article></Reveal><Reveal delay={.12}><article className="timeline-item"><span className="timeline-kicker">BUSINESS EXPOSURE</span><div className="timeline-icon timeline-icon-lavender"><Building2 size={18}/></div><div className="timeline-copy"><div className="timeline-top"><span>CONSOLIDATED BANK OF KENYA</span><span>QUALITY SERVICE TEAM</span></div><h3>Service, operations and the customer perspective.</h3><p>A banking attachment that developed professional communication, service excellence and cross-functional awareness.</p></div></article></Reveal><Reveal delay={.18}><article className="timeline-item timeline-item-future"><span className="timeline-kicker">NEXT CHAPTER</span><div className="timeline-icon timeline-icon-outline"><ArrowUpRight size={18}/></div><div className="timeline-copy"><div className="timeline-top"><span>FUTURE SOFTWARE ENGINEERING CAREER</span><span>IN PROGRESS</span></div><h3>Ready to build what’s next.</h3><p>Looking forward to joining a team that values thoughtful engineering, useful technology and continuous learning.</p><a className="text-link" href="#contact">Start a conversation <ArrowRight size={14}/></a></div></article></Reveal></div></section>

        <section className="section testimonials-section"><div className="wrap"><SectionHeading number="07" eyebrow="The human side" title={<>Good work is a <em>team sport.</em></>} description="I value thoughtful collaboration, clear communication and a willingness to keep learning."/><div className="values-grid"><Reveal><article className="value-card"><div className="quote-mark">“</div><p>I’m at my best when I can listen carefully, find the real issue and work with others to make the fix stick.</p><div className="value-person"><span className="value-avatar"><img src="/images/portrait-smile.webp" alt="" loading="lazy"/></span><span><b>Collins Steve Njagi</b><small>MY APPROACH</small></span></div></article></Reveal><Reveal delay={.08}><article className="recommendation-card"><div className="recommendation-icon"><HeartHandshake size={19}/></div><span>COLLABORATION MATTERS</span><h3>Thoughtful work.<br/>Clear communication.</h3><p>Testimonials from colleagues and supervisors will be added as they become available.</p><div className="recommendation-bottom"><span>REFERENCES AVAILABLE ON REQUEST</span><ArrowUpRight size={14}/></div></article></Reveal></div></div></section>

        <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div className="contact-left"><div className="eyebrow"><span>08</span><i/> CONTACT</div><h2>Have a good<br/><em>problem to solve?</em></h2><p>I’d love to hear about your team, your project or an opportunity to build something useful together.</p><div className="contact-details"><a href="mailto:csnjagi@proton.me"><span className="contact-detail-icon"><Mail size={15}/></span><span><small>EMAIL</small><b>csnjagi@proton.me</b></span><ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/collins-njagia57984278" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Linkedin size={15}/></span><span><small>LINKEDIN</small><b>collins-njagia57984278</b></span><ArrowUpRight size={14}/></a><div><span className="contact-detail-icon"><MapPin size={15}/></span><span><small>LOCATION</small><b>Nairobi, Kenya</b></span></div></div></div><Reveal className="contact-form-wrap"><div className="form-heading"><div><span className="form-eyebrow">LET’S CONNECT</span><h3>Send me a message.</h3></div><span className="form-spark"><Sparkles size={17}/></span></div><form className="grid gap-3" onSubmit={submitContact}><div className="form-row"><label>Your name<input name="name" type="text" placeholder="Jane Doe" required autoComplete="name"/></label><label>Email address<input name="email" type="email" placeholder="jane@company.com" required autoComplete="email"/></label></div><label>Subject<input name="subject" type="text" placeholder="What would you like to talk about?" required/></label><label>Message<textarea name="message" placeholder="A little context goes a long way..." rows={4} required/></label><button type="submit" className="button button-primary form-submit">{sent ? "Email draft opened" : "Send a message"} {sent ? <Check size={15}/> : <ArrowUpRight size={15}/>}</button><p className="form-note"><Mail size={12}/> Your email app will open with your message ready to send.</p></form></Reveal></div></section>
      </main>

      <footer className="site-footer"><div className="wrap footer-top"><a className="wordmark footer-wordmark" href="#home"><span>CS</span><small>ENGINEER & BUILDER</small></a><p>Building with intention.<br/>From Nairobi, Kenya.</p><div className="footer-links"><a href="https://github.com/csnjagi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a><a href="https://www.linkedin.com/in/collins-njagia57984278" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a><a href="mailto:csnjagi@proton.me" aria-label="Email"><Mail size={16}/></a><a href="/collins-steve-njagi-cv.pdf" download className="footer-cv">DOWNLOAD CV <Download size={12}/></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} COLLINS STEVE NJAGI</span><span>MADE WITH CARE <span className="footer-heart">✳</span> NAIROBI, KE</span><a href="#home">BACK TO TOP <ArrowDown size={12} className="back-up"/></a></div></footer>
      <a className="mobile-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
    </>
  );
}
