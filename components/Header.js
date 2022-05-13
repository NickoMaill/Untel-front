import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import AppContext from "../context/state";

const imageSize = 25;

export default function Header() {
	const Context = useContext(AppContext);

	return (
		<header id="top" className={styles.headerContainer}>
			{!Context.isBurger ? (
				<>
					<div>
						<nav>
							<Link passHref={true} href="/">
								<span className={styles.navLink}>Accueil</span>
							</Link>
							<Link passHref={true} href="/contact">
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
								alt="facebook"
								title="facebook"
								src="/icons/facebook-white.png"
							/>
						</a>
						<a href="">
							<img
								alt="instagram"
								title="instagram"
								className={styles.headerIcon}
								src="/icons/instagram-white.png"
							/>
						</a>
						<a href="">
							<img
								alt="youtube"
								title="youtube"
								className={styles.headerIcon}
								src="/icons/youtube-white.png"
							/>
						</a>
						<a href="">
							<img
								alt="spotify"
								title="spotify"
								className={styles.headerIcon}
								src="/icons/spotify-white.png"
							/>
						</a>
						<a href="">
							<img
								alt="deezer"
								title="deezer"
								className={styles.headerIcon}
								src="/icons/deezer-white.png"
							/>
						</a>
					</div>
				</>
			) : (
				<>
					<div>
						<h1>Untel</h1>
					</div>
					<Menu>
						<nav>
							<Link passHref={true} href="/">
								<span className={styles.navLink}>Accueil</span>
							</Link>
							<Link passHref={true} href="/contact">
								<span className={styles.navLink}>Contact</span>
							</Link>
						</nav>
						<div className={styles.iconContainer}>
							<a href="">
								<img
									className={styles.headerIcon}
									alt="facebook"
									title="facebook"
									src="/icons/facebook-white.png"
								/>
							</a>
							<a href="">
								<img
									alt="instagram"
									title="instagram"
									className={styles.headerIcon}
									src="/icons/instagram-white.png"
								/>
							</a>
							<a href="">
								<img
									alt="youtube"
									title="youtube"
									className={styles.headerIcon}
									src="/icons/youtube-white.png"
								/>
							</a>
							<a href="">
								<img
									alt="spotify"
									title="spotify"
									className={styles.headerIcon}
									src="/icons/spotify-white.png"
								/>
							</a>
							<a href="">
								<img
									alt="deezer"
									title="deezer"
									className={styles.headerIcon}
									src="/icons/deezer-white.png"
								/>
							</a>
						</div>
					</Menu>
				</>
			)}
		</header>
	);
}
