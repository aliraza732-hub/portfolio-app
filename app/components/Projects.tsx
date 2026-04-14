"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const projects = [
  {
    name:        "ShopEase",
    tagline:     "Full-stack e-commerce platform",
    description: "A complete e-commerce solution with product management, cart, payments via Stripe, and an admin dashboard.",
    tech:        ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    stars:       "48",
    link:        "https://github.com/alirazamehar732-hub",
    featured:    true,
  },
  {
    name:        "TaskFlow",
    tagline:     "Team task management app",
    description: "A Kanban-style project management tool with real-time updates, role-based access, and drag-and-drop interface.",
    tech:        ["React", "Node.js", "Socket.io", "MongoDB"],
    stars:       "31",
    link:        "https://github.com/alirazamehar732-hub",
    featured:    true,
  },
  {
    name:        "WeatherNow",
    tagline:     "Real-time weather dashboard",
    description: "A weather app with location search, 7-day forecasts, and animated icons using the OpenWeatherMap API.",
    tech:        ["React", "TypeScript", "REST API"],
    stars:       "19",
    link:        "https://github.com/alirazamehar732-hub",
    featured:    false,
  },
  {
    name:        "BlogCMS",
    tagline:     "Headless CMS for bloggers",
    description: "A lightweight headless CMS with a markdown editor, image uploads, and a public API.",
    tech:        ["Next.js", "Prisma", "PostgreSQL", "S3"],
    stars:       "22",
    link:        "https://github.com/alirazamehar732-hub",
    featured:    false,
  },
];

export default function Projects() {
  const ref      = useRef(null);
  const inView   = useInView(ref, viewport);
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: "56px" }}>
          <p className="font-mono-custom" style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            Things I've built
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
            Projects
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Featured cards */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "16px" }}>
          {featured.map((p) => (
            <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
              variants={scaleIn}
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "240px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "28px", textDecoration: "none", transition: "border-color 0.3s, box-shadow 0.3s" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(201,168,76,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: 700 }}>{p.name[0]}</span>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-dim)" />
                </div>
                <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: "4px" }}>{p.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--gold)", marginBottom: "10px", fontWeight: 500 }}>{p.tagline}</p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--text-muted)" }}>{p.description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ padding: "3px 8px", borderRadius: "4px" }}>{t}</span>)}
                </div>
                <span className="font-mono-custom" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <Star size={11} /> {p.stars}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Smaller rows */}
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {rest.map((p) => (
            <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
              variants={fadeUp}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 20px", textDecoration: "none", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
              <div style={{ flex: 1, minWidth: 0, marginRight: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text)" }}>{p.name}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--gold)" }}>— {p.tagline}</span>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "0.65rem" }}>{t}</span>)}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                <span className="font-mono-custom" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <Star size={11} /> {p.stars}
                </span>
                <ArrowUpRight size={14} color="var(--text-dim)" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ textAlign: "center", marginTop: "36px" }}>
          <a href="https://github.com/aliraza732-hub" target="_blank" rel="noopener noreferrer"
            className="font-mono-custom"
            style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
            View all projects on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}