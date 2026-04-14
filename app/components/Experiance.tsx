"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ChevronDown } from "lucide-react";

const experiences = [
  {
    company:      "Freelance",
    role:         "Full Stack Developer",
    period:       "2022 — Present",
    location:     "Remote",
    description:  "Delivering end-to-end web solutions for clients across Pakistan and internationally — from requirements gathering to deployment.",
    achievements: [
      "Built and deployed 10+ client projects using Next.js, React, and Node.js",
      "Designed and maintained PostgreSQL databases with Prisma ORM",
      "Reduced average page load time by 45% through code splitting and caching strategies",
      "Implemented CI/CD pipelines using GitHub Actions for automated deployments",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    company:      "Local Tech Agency",
    role:         "Junior Web Developer",
    period:       "2021 — 2022",
    location:     "Kasur, Pakistan",
    description:  "Worked in a small team building and maintaining websites for local businesses and NGOs.",
    achievements: [
      "Developed responsive landing pages and e-commerce stores",
      "Integrated third-party APIs including payment gateways and maps",
      "Collaborated with designers to implement pixel-perfect UI components",
    ],
    tech: ["React", "JavaScript", "Node.js", "MySQL", "CSS"],
  },
];

export default function Experience() {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="experience" ref={ref} style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ marginBottom: "56px" }}>
          <p className="font-mono-custom"
            style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            Where I've worked
          </p>
          <h2 className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
            Experience
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position:   "absolute",
            left:       "10px",
            top:        0,
            bottom:     0,
            width:      "1px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as any }}
                style={{ paddingLeft: "40px", position: "relative" }}>

                {/* Dot */}
                <div style={{
                  position:     "absolute",
                  left:         0,
                  top:          "24px",
                  width:        "20px",
                  height:       "20px",
                  borderRadius: "50%",
                  border:       `2px solid ${open === i ? "var(--gold)" : "var(--border-light)"}`,
                  background:   open === i ? "var(--gold-dim)" : "var(--bg)",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  transition:   "all 0.3s",
                }}>
                  <div style={{
                    width:        "6px",
                    height:       "6px",
                    borderRadius: "50%",
                    background:   open === i ? "var(--gold)" : "var(--text-dim)",
                    transition:   "background 0.3s",
                  }} />
                </div>

                {/* Card */}
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width:        "100%",
                    textAlign:    "left",
                    background:   open === i ? "var(--bg-card)" : "transparent",
                    border:       `1px solid ${open === i ? "var(--border-light)" : "transparent"}`,
                    borderRadius: "12px",
                    padding:      "20px 24px",
                    cursor:       "pointer",
                    transition:   "all 0.3s",
                  }}
                  onMouseEnter={e => {
                    if (open !== i) {
                      (e.currentTarget as HTMLElement).style.background    = "rgba(17,24,39,0.5)";
                      (e.currentTarget as HTMLElement).style.borderColor   = "var(--border)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (open !== i) {
                      (e.currentTarget as HTMLElement).style.background    = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor   = "transparent";
                    }
                  }}>

                  {/* Card header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" }}>
                          {exp.role}
                        </h3>
                        <span style={{ color: "var(--gold)", fontSize: "0.9rem", fontWeight: 500 }}>
                          @ {exp.company}
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          <Calendar size={12} /> {exp.period}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <ChevronDown size={16} color="var(--text-dim)"
                      style={{ flexShrink: 0, marginTop: "4px", transition: "transform 0.3s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </div>

                  {/* Expanded body */}
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as any }}
                      style={{ overflow: "hidden", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "16px" }}>
                        {exp.description}
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {exp.achievements.map((a, j) => (
                          <motion.li key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.07 }}
                            style={{ display: "flex", gap: "10px", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "7px" }} />
                            {a}
                          </motion.li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {exp.tech.map(t => (
                          <span key={t} className="tag" style={{ padding: "4px 10px", borderRadius: "6px" }}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}