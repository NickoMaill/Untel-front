import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

export default function Footer({ onClick }) {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.upFooterContainer}>
				<div></div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<a href="#">
						<div className={styles.footerIcon}>
							<Image
								height={32}
								width={32}
								src="/svg/up.svg"
								title="remonter en haut de la page"
								alt="flèche de retour en haut de page"
							/>
						</div>
					</a>
				</div>
				<div className={styles.iconContainer}>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/untelofficiel">
						<div className={styles.footerIcon}>
							<Image loading="lazy" width={24} height={24} alt="facebook" title="facebook" src="/svg/facebook.svg" />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/untel.officiel/">
						<div className={styles.footerIcon}>
							<Image loading="lazy" width={24} height={24} alt="instagram" title="instagram" src="/svg/instagram.svg" />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC2yk6QHhrP-h_Ytn9DCcEjg">
						<div className={styles.footerIcon}>
							<Image loading="lazy" width={24} height={24} alt="youtube" title="youtube" src="/svg/youtube.svg" />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/6FKGND11aWqkYLC2zS1zas">
						<div className={styles.footerIcon}>
							<Image loading="lazy" width={24} height={24} alt="spotify" title="spotify" src="/svg/spotifyLogo.svg" />
						</div>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.deezer.com/fr/artist/68974282">
						<div className={styles.footerIcon}>
							<Image loading="lazy" width={24} height={24} alt="deezer" title="deezer" src="/svg/deezerLogo.svg" />
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
