"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLang();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);

    const sections = links
      .map((l) => document.querySelector(l.href) as HTMLElement)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.row}>
          {/* Sol: logo */}
          <a href="#home" className={styles.brand}>
            <Image
              src="/logo.svg"
              alt="Compile"
              width={120}
              height={37}
              priority
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          <div className={styles.right}>
            <nav className={styles.nav}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" className={styles.cta}>
                {t.nav.cta}
              </a>
            </nav>

            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <span className={styles.langSep}>|</span>
              <button
                className={`${styles.langBtn} ${lang === "tr" ? styles.langActive : ""}`}
                onClick={() => setLang("tr")}
              >
                TR
              </button>
            </div>

            <button
              className={styles.hamburger}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {open && (
          <div className={styles.mobile}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${styles.mobileLink} ${active === l.href ? styles.mobileLinkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              {t.nav.cta} →
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}
