"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { fadeUp, fadeLeft, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const education = [
  {
    school:     "University of the Punjab",
    degree:     "B.Sc. Computer Science",
    period:     "2019 — 2023",
    // gpa:        "3.6 / 4.0",
    // honors:     "Dean's List",
    courses:    ["Data Structures", "Algorithms", "Database Systems", "Operating Systems", "Web Engineering", "Software Engineering"],
    activities: ["CS Society Member", "Hackathon Participant — 2nd Place 2022"],
  },
];

export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, viewport);

  return (
    <section id="education" ref={ref} style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: "56px" }}>
          <p className="font-mono-custom" style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            Academic background
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
            Education
          </h2>
          <div className="section-line" />
        </motion.div>

        {education.map((edu) => (
          <motion.div key={edu.school} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "36px" }}>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
              {/* Icon */}
              <motion.div variants={scaleIn}
                style={{ width: "56px", height: "56px", borderRadius: "12px", flexShrink: 0, background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={26} color="var(--gold)" />
              </motion.div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", marginBottom: "10px" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: "2px" }}>{edu.school}</h3>
                    <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>{edu.degree}</p>
                  </div>
                  <p className="font-mono-custom" style={{ fontSize: "0.8rem", color: "var(--text-dim)", paddingTop: "4px" }}>{edu.period}</p>
                </div>

                {/* Badges */}
                {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "8px", fontSize: "0.82rem", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold)" }}>
                    <Award size={13} /> {edu.honors}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "8px", fontSize: "0.82rem", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}>
                    <BookOpen size={13} /> GPA {edu.gpa}
                  </span>
                </div> */}

                {/* Courses + Activities */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                  <div>
                    <p className="font-mono-custom" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "12px" }}>
                      Relevant Coursework
                    </p>
                    <motion.div variants={staggerContainer(0.06, 0.4)} initial="hidden" animate={inView ? "visible" : "hidden"}
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {edu.courses.map((c) => (
                        <motion.span key={c} variants={scaleIn}
                          style={{ padding: "4px 10px", borderRadius: "6px", fontSize: "0.78rem", background: "var(--bg)", border: "1px solid var(--border-light)", color: "var(--text-muted)" }}>
                          {c}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  <div>
                    <p className="font-mono-custom" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "12px" }}>
                      Activities
                    </p>
                    <motion.ul variants={staggerContainer(0.08, 0.5)} initial="hidden" animate={inView ? "visible" : "hidden"}
                      style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                      {edu.activities.map((a) => (
                        <motion.li key={a} variants={fadeLeft}
                          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                          {a}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}