import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import Facebook from "../public/svg/facebook.svg";
import Spotify from "../public/svg/spotifyLogo.svg";
import Deezer from "../public/svg/deezerLogo.svg";
import Instagram from "../public/svg/instagram.svg";
import Youtube from "../public/svg/youtube.svg";

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
						aria-label="burger button"
						onClick={() => handleShowMenu()}
						className={`${styles.burger} ${showMenu && styles.closeMenu}`}
					>
						<span className={styles.burgerBar}> </span>
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
							<a
								title="aller a la page facebook"
								target="_blank"
								rel="noreferrer"
								href="https://www.facebook.com/untelofficiel"
							>
								<div className={styles.headerIcon}>
									<Facebook />
								</div>
							</a>
							<a
								title="aller a la page instagram"
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/untel.officiel/"
							>
								<div className={styles.headerIcon}>
									<Instagram />
								</div>
							</a>
							<a
								title="aller a la page youtube"
								target="_blank"
								rel="noreferrer"
								href="https://www.youtube.com/channel/UC2yk6QHhrP-h_Ytn9DCcEjg"
							>
								<div className={styles.headerIcon}>
									<Youtube />
								</div>
							</a>
							<a
								title="aller a la page spotify"
								target="_blank"
								rel="noreferrer"
								href="https://open.spotify.com/artist/6FKGND11aWqkYLC2zS1zas"
							>
								<div className={styles.headerIcon}>
									<Spotify />
								</div>
							</a>
							<a
								title="aller a la page deezer"
								target="_blank"
								rel="noreferrer"
								href="https://www.deezer.com/fr/artist/68974282"
							>
								<div className={styles.headerIcon}>
									<Deezer />
								</div>
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
