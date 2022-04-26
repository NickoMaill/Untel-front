import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

const imageSize = 25;

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<div>
				<nav>
					<Link href="/">
						<span className={styles.navLink}>Accueil</span>
					</Link>
					<Link href="/contact">
						<span className={styles.navLink}>Contact</span>
					</Link>
				</nav>
			</div>
			<div>
				<h1>Untel</h1>
			</div>
			<div className={styles.iconContainer}>
				<a href="">
					<img
						className={styles.headerIcon}
						src="/icons/facebook-white.png"
					/>
				</a>
				<a href="">
					<img
						className={styles.headerIcon}
						src="/icons/instagram-white.png"
					/>
				</a>
				<a href="">
					<img
						className={styles.headerIcon}
						src="/icons/youtube-white.png"
					/>
				</a>
				<a href="">
					<img
						className={styles.headerIcon}
						src="/icons/spotify-white.png"
					/>
				</a>
				<a href="">
					<img
						className={styles.headerIcon}
						src="/icons/deezer-white.png"
					/>
				</a>
			</div>
		</header>
	);
}
