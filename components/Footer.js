import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Facebook from "../public/svg/facebook.svg";
import Spotify from "../public/svg/spotifyLogo.svg";
import Deezer from "../public/svg/deezerLogo.svg";
import Instagram from "../public/svg/instagram.svg";
import Youtube from "../public/svg/youtube.svg";
import Arrow from "../public/svg/up.svg"

export default function Footer({ onClick }) {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.upFooterContainer}>
				<div></div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<a title="remonter en haut de page" href="#">
						<div className={styles.footerIcon}>
							<Arrow/>
						</div>
					</a>
				</div>
				<div className={styles.iconContainer}>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/untelofficiel">
						<div className={styles.footerIcon}>
							<Facebook />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/untel.officiel/">
						<div className={styles.footerIcon}>
							<Instagram />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC2yk6QHhrP-h_Ytn9DCcEjg">
						<div className={styles.footerIcon}>
							<Youtube />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/6FKGND11aWqkYLC2zS1zas">
						<div className={styles.footerIcon}>
							<Spotify />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.deezer.com/fr/artist/68974282">
						<div className={styles.footerIcon}>
							<Deezer />
						</div>
					</a>
				</div>
			</div>
			<div className={styles.infoContainer}>
				<Link passHref={true} href="/mediaCredits">
					<span className={styles.footerLink}>Crédit photo et vidéo</span>
				</Link>
				<Link passHref={true} href="/legalMentions">
					<span className={styles.footerLink}>Mentions légales</span>
				</Link>
				<Link passHref={true} href="/privacyPolicy">
					<span className={styles.footerLink}>politique de confidentialité</span>
				</Link>
				<Link passHref={true} href="/CGU">
					<span className={styles.footerLink}>CGU</span>
				</Link>
			</div>
		</footer>
	);
}
