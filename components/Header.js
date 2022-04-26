import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div>
        <h1>Untel</h1>
      </div>
      <div className={styles.iconContainer}>
        <Image
          className={styles.headerIcon}
          src={require("../public/icons/facebook-white.png")}
        />
        <Image
          className={styles.headerIcon}
          src={require("../public/icons/instagram-white.png")}
        />
        <Image
          className={styles.headerIcon}
          src={require("../public/icons/youtube-white.png")}
        />
        <Image
          className={styles.headerIcon}
          src={require("../public/icons/spotify-white.png")}
        />
        <Image
          className={styles.headerIcon}
          src={require("../public/icons/deezer-white.png")}
        />
      </div>
    </div>
  );
}
