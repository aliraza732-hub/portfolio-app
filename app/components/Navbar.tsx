"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Education",  href: "#education"  },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth       = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    // Track scroll
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Track screen width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          width:      progressWidth,
          position:   "fixed",
          top:        0,
          left:       0,
          height:     "2px",
          background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          zIndex:     60,
        }}
      />

      {/* Main nav */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         50,
          padding:        scrolled ? "12px 0" : "20px 0",
          background:     scrolled ? "rgba(8, 11, 18, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom:   scrolled ? "1px solid var(--border)" : "none",
          transition:     "padding 0.4s, background 0.4s, border 0.4s",
        }}
      >
        <div style={{
          maxWidth:       "1152px",
          margin:         "0 auto",
          padding:        "0 24px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
        }}>

          {/* Logo — always visible */}
          <a
            href="#hero"
            className="text-gold-gradient font-display"
            style={{ fontSize: "1.4rem", fontWeight: 900, textDecoration: "none" }}
          >
            AM
          </a>

          {/* Desktop nav links — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y:  0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  style={{
                    color:          "var(--text-muted)",
                    fontSize:       "0.875rem",
                    textDecoration: "none",
                    transition:     "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Resume button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color:          "var(--gold)",
                  border:         "1px solid var(--gold)",
                  borderRadius:   "6px",
                  padding:        "6px 16px",
                  fontSize:       "0.875rem",
                  textDecoration: "none",
                  transition:     "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--gold-dim)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                Resume
              </a>
            </div>
          )}

          {/* Mobile hamburger — only on mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                background:    "none",
                border:        "none",
                cursor:        "pointer",
                padding:       "6px",
                display:       "flex",
                flexDirection: "column",
                gap:           "5px",
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display:    "block",
                    width:      "22px",
                    height:     "2px",
                    borderRadius: "2px",
                    background: "var(--gold)",
                    transition: "transform 0.3s, opacity 0.3s",
                    transform:
                      menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)"   :
                      menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMobile && menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{   opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                overflow:      "hidden",
                background:    "rgba(8, 11, 18, 0.97)",
                borderTop:     "1px solid var(--border)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x:   0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      color:          "var(--text-muted)",
                      fontSize:       "1rem",
                      textDecoration: "none",
                      padding:        "10px 0",
                      borderBottom:   "1px solid var(--border)",
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "space-between",
                      transition:     "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link.label}
                    <span style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>↗</span>
                  </motion.a>
                ))}

                {/* Resume in mobile menu */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        "inline-flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    marginTop:      "12px",
                    padding:        "10px 0",
                    color:          "var(--gold)",
                    border:         "1px solid var(--gold)",
                    borderRadius:   "8px",
                    fontSize:       "0.9rem",
                    textDecoration: "none",
                    transition:     "background 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--gold-dim)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}