"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Zap, Users, BookOpen } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewport } from "@/lib/animations";

const values = [
  { icon: Code2,    title: "Clean Code",       desc: "Readable, maintainable, and well-documented code over clever one-liners." },
  { icon: Zap,      title: "Performance First", desc: "Every millisecond matters. I optimise for speed without sacrificing clarity." },
  { icon: Users,    title: "Team Player",       desc: "Great software is a team effort. I invest in collaboration and communication." },
  { icon: BookOpen, title: "Always Learning",   desc: "The field moves fast. I stay current through side projects and open source." },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, viewport);

  return (
    <section id="about" ref={ref} style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ marginBottom: "56px" }}>
          <p className="font-mono-custom" style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            Who I am
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
            About Me
          </h2>
          <div className="section-line" />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "start" }}>

          {/* Left — bio */}
          <motion.div variants={fadeLeft} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "20px" }}>
              I'm <span style={{ color: "var(--text)", fontWeight: 500 }}>Ali Mubarak</span>, a software engineer
              based in <span style={{ color: "var(--text)", fontWeight: 500 }}>Kasur, Pakistan</span>. I specialise
              in building full-stack web applications that are fast, accessible, and easy to maintain.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "20px" }}>
             I started coding for fun and then made it my job. Over the years, I've worked on all parts of the stack, from making polished UIs to designing REST APIs and keeping databases in order.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "32px" }}>
              To keep my skills sharp, I work on open source projects, write about web development, and try out new technologies in my free time.
            </p>
            <blockquote style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "20px", margin: 0 }}>
              <p className="font-display" style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.7 }}>
                "Good software is built twice — once in your head, once in the editor."
              </p>
            </blockquote>
          </motion.div>

          {/* Right — values grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={scaleIn}
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", transition: "border-color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <Icon size={16} color="var(--gold)" />
                  </div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", marginBottom: "6px" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}