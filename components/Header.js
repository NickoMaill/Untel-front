import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

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
							<a target="_blank" rel="noreferrer" href="https://www.facebook.com/untelofficiel">
								<img
									className={styles.headerIcon}
									alt="facebook"
									title="facebook"
									src="/svg/facebook.svg"
								/>
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.instagram.com/untel.officiel/">
								<img
									alt="instagram"
									title="instagram"
									className={styles.headerIcon}
									src="/svg/instagram.svg"
								/>
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC2yk6QHhrP-h_Ytn9DCcEjg">
								<img
									alt="youtube"
									title="youtube"
									className={styles.headerIcon}
									src="/svg/youtube.svg"
								/>
							</a>
							<a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/6FKGND11aWqkYLC2zS1zas">
								<img
									alt="spotify"
									title="spotify"
									className={styles.headerIcon}
									src="/svg/spotify.svg"
								/>
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.deezer.com/fr/artist/68974282">
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
