"use client";
import Section from "@/components/layout/Section/Section";
import styles from "./About.module.css";
import { useLang } from "@/context/LangContext";

export default function AboutSection() {
  const { t } = useLang();
  const a = t.about;
  const icons = ["🛡️", "⚡", "🧩", "📈"];
  return (
    <Section
      id="about"
      tag={a.tag}
      title={
        <>
          {a.titleA} <em>{a.titleAccent}</em>
          <br />
          {a.titleB}
        </>
      }
      background="cream2"
    >
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.p}>{a.p1}</p>
          <p className={styles.p}>{a.p2}</p>
          <p className={styles.p}>{a.p3}</p>
        </div>

        <div className={styles.values}>
          {a.values.map((v, i) => (
            <div key={i} className={styles.vi}>
              <div className={styles.viRow}>
                <span className={styles.viTitle}>{v.title}</span>
                <span className={styles.viIco}>{icons[i]}</span>
              </div>
              <p className={styles.viDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
