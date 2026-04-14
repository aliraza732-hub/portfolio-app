"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { heroStagger, heroItem } from "@/lib/animations";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const orb1X = useTransform(smoothX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(smoothY, [0, 1], [-30, 30]);
  const orb2X = useTransform(smoothX, [0, 1], [30, -30]);
  const orb2Y = useTransform(smoothY, [0, 1], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      id="hero"
      className="bg-grid"
      onMouseMove={handleMouseMove}
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient orbs */}
      <motion.div style={{ position: "absolute", width: 600, height: 600, top: "5%", right: "-10%", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none", x: orb1X, y: orb1Y }} />
      <motion.div style={{ position: "absolute", width: 500, height: 500, bottom: "0%", left: "-8%", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none", x: orb2X, y: orb2Y }} />

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <motion.div variants={heroStagger} initial="hidden" animate="visible" style={{ maxWidth: "720px" }}>

          {/* Badge */}
          <motion.div variants={heroItem} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span className="tag" style={{ padding: "4px 12px", borderRadius: "999px" }}>Open to opportunities</span>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          </motion.div>

          {/* Greeting */}
          <motion.p variants={heroItem} className="font-mono-custom"
            style={{ color: "var(--gold)", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "12px" }}>
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={heroItem} className="font-display"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "16px" }}>
            <span style={{ color: "var(--text)" }}>Ali</span>
            <br />
            <span className="text-gold-gradient">Mubarak</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={heroItem}
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.75rem)", fontWeight: 300, color: "var(--text-muted)", marginBottom: "24px" }}>
            Software Engineer
            <span style={{ display: "inline-block", width: "2px", height: "1.2em", background: "var(--gold)", marginLeft: "10px", verticalAlign: "middle" }} />
          </motion.h2>

          {/* Bio */}
          <motion.p variants={heroItem}
            style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "560px", marginBottom: "40px" }}>
            I build modern, performant web applications with clean architecture and great user experiences.
            Based in Kasur, Pakistan — working with teams around the world.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroItem} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
            <a href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--gold)", color: "var(--bg)", borderRadius: "8px", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--gold-light)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--gold)")}>
              <Mail size={16} /> Get in touch
            </a>
            <a href="#projects"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", border: "1px solid var(--border-light)", color: "var(--text)", borderRadius: "8px", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}>
              View my work <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={heroItem} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {[
              { label: "GitHub",   href: "https://github.com/alirazamehar732-hub" },
              { label: "LinkedIn", href: "https://linkedin.com/in/ali32" },
              { label: "Email",    href: "mailto:alirazamehar732@gmail.com" },
            ].map(({ label, href }, i) => (
              <>
                {i > 0 && <span key={`div-${i}`} style={{ width: "1px", height: "14px", background: "var(--border)" }} />}
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="font-mono-custom"
                  style={{ color: "var(--text-dim)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-dim)")}>
                  {label} ↗
                </a>
              </>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "var(--text-dim)" }}>
        <span className="font-mono-custom" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}