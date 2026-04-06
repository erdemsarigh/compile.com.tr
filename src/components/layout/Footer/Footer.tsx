"use client";
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Footer.module.css";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Image
            src="/footer_logo.svg"
            alt="Compile"
            width={31}
            height={31}
            className={styles.logo}
          />
          <div className={styles.copy}>
            © {new Date().getFullYear()} {f.copy}
          </div>
          <div className={styles.links}>
            <a href="#services">{f.services}</a>
            <a href="#projects">{f.projects}</a>
            <a href="#about">{f.about}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
