"use client";
import Section from "@/components/layout/Section/Section";
import styles from "./Services.module.css";
import { useLang } from "@/context/LangContext";

export default function ServicesSection() {
  const { t } = useLang();
  const s = t.services;
  return (
    <Section
      id="services"
      tag={s.tag}
      title={
        <>
          {s.titleA} <em>{s.titleAccent}</em><br />
          {s.titleB}
        </>
      }
      subtitle={s.subtitle}
      background="cream2"
    >
      <div className={styles.grid}>
        {s.items.map((item) => (
          <div key={item.num} className={styles.sv}>
            <div className={styles.num}>{item.num}</div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.desc}>{item.desc}</p>
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
