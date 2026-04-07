import { ReactNode } from "react";
import Container from "../Container/Container";
import Reveal from "../../ui/Reveal";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  tag?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  background?: "cream" | "cream2";
}

export default function Section({
  id, tag, title, subtitle, children,
  background = "cream2",
}: SectionProps) {
  return (
    <section
      id={id}
      className={styles.section}
      style={{
        background: background === "cream" ? "var(--cream)" : "var(--cream2)",
      }}
    >
      <Container>
        <Reveal>
          <div className={styles.header}>
            {tag && (
              <div className={styles.tag}>
                <span className={styles.tagLine} />
                {tag}
                <span className={styles.tagLine} />
              </div>
            )}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </Container>
    </section>
  );
}