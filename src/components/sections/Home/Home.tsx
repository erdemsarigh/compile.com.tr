"use client";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/layout/Container/Container";
import styles from "./Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";

const icons = ["🏥", "💊", "🧾", "🤝", "👨‍⚕️", "📊"];

export default function HomeSection() {
  const { t } = useLang();
  const h = t.home;
  const statsRef = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0); // 10+
  const [count2, setCount2] = useState(0); // 6
  const [count3, setCount3] = useState(0); // 100%

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // count1: 0 → 10
        const animate = (
          setter: (v: number) => void,
          target: number,
          duration: number,
        ) => {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setter(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setter(target);
          };
          requestAnimationFrame(tick);
        };

        animate(setCount1, 15, 1200);
        animate(setCount2, 20, 1000);
        animate(setCount3, 100, 1400);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.line} />

      <div className={styles.circle} />
      <div className={styles.circleInner} />

      <Container>
        <div className={styles.inner}>
          <Reveal>
            <div className={styles.left}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {h.eyebrow}
                <span className={styles.eyebrowLine} />
              </div>

              <h1 className={styles.h1}>
                {h.h1a} <em className={styles.em}>{h.h1accent}</em>
                <br />
                {h.h1b}
              </h1>
              <p className={styles.lead}>{h.lead}</p>
              <div className={styles.btns}>
                <a href="#projects" className={styles.btnP}>
                  {h.btnPrimary}
                </a>
                <a href="#contact" className={styles.btnS}>
                  {h.btnSecondary}
                </a>
              </div>

              <div className={styles.stats} ref={statsRef}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>{count1}+</div>
                  <div className={styles.statLbl}>{h.stat1lbl}</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>{count2}</div>
                  <div className={styles.statLbl}>{h.stat2lbl}</div>
                </div>
                <div className={styles.statSep} />
                <div className={styles.stat}>
                  <div className={styles.statVal}>{count3}%</div>
                  <div className={styles.statLbl}>{h.stat3lbl}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>{h.cardLabel}</span>
              <div className={styles.activeBadge}>
                <span className={styles.activeDot} /> {h.cardBadge}
              </div>
            </div>

            <div className={styles.domainList}>
              {h.domains.map((d, i) => (
                <div key={i} className={styles.dlItem}>
                  <div className={styles.dlIco}>{icons[i]}</div>
                  <div>
                    <div className={styles.dlName}>{d.name}</div>
                    <div className={styles.dlDesc}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
