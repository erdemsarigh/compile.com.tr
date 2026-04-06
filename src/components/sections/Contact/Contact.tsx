"use client";
import styles from "./Contact.module.css";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section id="contact" className={styles.sec}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <Reveal>
        {" "}
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            {c.eyebrow}
            <span className={styles.line} />
          </div>

          <h2 className={styles.h}>
            {c.titleA}
            <br />
            {c.titleB} <em className={styles.em}>{c.titleAccent}</em>
          </h2>

          <p className={styles.sub}>{c.sub}</p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <a href={`mailto:${c.email}`} className={styles.cl}>
              <span className={styles.ico}>✉️</span>
              <span>{c.email}</span>
              <span className={styles.arr}>→</span>
            </a>
            <a
              href="https://www.linkedin.com/company/compileyazilim/"
              target="_blank"
              rel="noreferrer"
              className={styles.cl}
            >
              <span className={styles.ico}>💼</span>
              <span>{c.linkedin}</span>
              <span className={styles.arr}>→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
