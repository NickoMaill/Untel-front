import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
								<div className={styles.headerIcon}>
									<Image
										width={24}
										height={24}
										alt="facebook"
										title="facebook"
										src="/svg/facebook.svg"
									/>
								</div>
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.instagram.com/untel.officiel/">
								<div className={styles.headerIcon}>
									<Image
										width={24}
										height={24}
										alt="instagram"
										title="instagram"
										src="/svg/instagram.svg"
									/>
								</div>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.youtube.com/channel/UC2yk6QHhrP-h_Ytn9DCcEjg"
							>
								<div className={styles.headerIcon}>
									<Image
										width={24}
										height={24}
										alt="youtube"
										title="youtube"
										src="/svg/youtube.svg"
									/>
								</div>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://open.spotify.com/artist/6FKGND11aWqkYLC2zS1zas"
							>
								<div className={styles.headerIcon}>
									<Image
										width={24}
										height={24}
										alt="spotify"
										title="spotify"
										src="/svg/spotifyLogo.svg"
									/>
								</div>
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.deezer.com/fr/artist/68974282">
								<div className={styles.headerIcon}>
									<Image
										width={24}
										height={24}
										alt="deezer"
										title="deezer"
										src="/svg/deezerLogo.svg"
									/>
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
