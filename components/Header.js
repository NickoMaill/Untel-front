import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import AppContext from "../context/state";

const imageSize = 25;

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<header id="top" className={styles.headerContainer}>
			<>
				<div className={styles.responsiveHeader}>
					<button
						onClick={() => handleShowMenu()}
						className={`${styles.burger} ${showMenu && styles.closeMenu}`}
					>
						<span className={styles.burgerBar}></span>
					</button>
					<nav className={`${styles.nav} ${showMenu ? styles.showNav : ""}`}>
						<div>
							<Link passHref={true} href="/">
								<span onClick={handleShowMenu} className={styles.navLink}>
									Accueil
								</span>
							</Link>
							<Link passHref={true} href="/contact">
								<span onClick={handleShowMenu} className={styles.navLink}>
									Contact
								</span>
							</Link>
						</div>
						<div className={styles.title1}>
							<h1>UNTEL</h1>
						</div>
						<div className={styles.iconContainer}>
							<a href="">
								<img
									className={styles.headerIcon}
									alt="facebook"
									title="facebook"
									src="/svg/facebook.svg"
								/>
							</a>
							<a href="">
								<img
									alt="instagram"
									title="instagram"
									className={styles.headerIcon}
									src="/svg/instagram.svg"
								/>
							</a>
							<a href="">
								<img
									alt="youtube"
									title="youtube"
									className={styles.headerIcon}
									src="/svg/youtube.svg"
								/>
							</a>
							<a href="">
								<img
									alt="spotify"
									title="spotify"
									className={styles.headerIcon}
									src="/svg/spotify.svg"
								/>
							</a>
							<a href="">
								<img
									alt="deezer"
									title="deezer"
									className={styles.headerIcon}
									src="/svg/deezer.svg"
								/>
							</a>
						</div>
					</nav>
				</div>
				<div className={styles.title2}>
					<h1>UNTEL</h1>
				</div>
			</>
		</header>
	);
}
