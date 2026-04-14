"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const skillCategories = [
  { label: "Languages",      color: "#c9a84c", skills: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frontend",       color: "#3b82f6", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend",        color: "#10b981", skills: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { label: "Database",       color: "#8b5cf6", skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"] },
  { label: "DevOps & Tools", color: "#f97316", skills: ["Git", "GitHub Actions", "Docker", "Vercel"] },
];

const stats = [
  { value: "3+",  label: "Years coding"     },
  { value: "15+", label: "Projects shipped" },
  { value: "5+",  label: "Happy clients"    },
  { value: "10+", label: "Open source PRs"  },
];

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, viewport);

  return (
    <section id="skills" ref={ref} style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: "56px" }}>
          <p className="font-mono-custom" style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            What I work with
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
            Skills
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {skillCategories.map((cat) => (
            <motion.div key={cat.label} variants={scaleIn}
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "22px", transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = cat.color; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${cat.color}18`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "3px", height: "18px", borderRadius: "99px", background: cat.color, flexShrink: 0 }} />
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text)" }}>{cat.label}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <motion.span key={skill} variants={scaleIn}
                    style={{ padding: "6px 12px", borderRadius: "8px", fontSize: "0.82rem", background: `${cat.color}12`, border: `1px solid ${cat.color}28`, color: "var(--text-muted)", cursor: "default", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${cat.color}22`; (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}55`; (e.currentTarget as HTMLElement).style.color = cat.color; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${cat.color}12`; (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}28`; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.1, 0.4)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={scaleIn}
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
              <div className="font-display" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold)", marginBottom: "4px" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}