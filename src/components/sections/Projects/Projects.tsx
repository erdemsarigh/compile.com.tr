"use client";
import Section from "@/components/layout/Section/Section";
import styles from "./Projects.module.css";
import { useLang } from "@/context/LangContext";

export default function ProjectsSection() {
  const { t } = useLang();
  const p = t.projects;
const icons = ["🏥", "📋", "🧾", "🤝", "👨‍⚕️", "📊"];
  return (
    <Section
      id="projects"
      tag={p.tag}
      title={
        <>
          {p.titleA}
          <br />
          <em>{p.titleAccent}</em>
        </>
      }
      subtitle={p.subtitle}
      background="cream"
    >
      <div className={styles.grid}>
        {p.items.map((item, i) => (
          <a key={i} href="#" className={styles.card}>
            <div className={styles.top}>
              <div className={styles.ico}>{icons[i]}</div>
              <div className={styles.arr}>↗</div>
            </div>
            <div className={styles.tag}>{item.tag}</div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.desc}>{item.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
