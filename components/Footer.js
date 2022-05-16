import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";

export default function Footer({ onClick }) {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.infoContainer}>
				<span>&copy; Copyright All Rights Reserved - © 2022</span>
				<span>
					Photos par <a href="">Elodie Roy</a>
					<a href="https://elodieroyphotographe-69.webself.net/" target="_blank" rel="noreferrer">
						Atiah
					</a>
				</span>
				<span>
					site codé par <a href="">Nicolas Maillols</a>{" "}
				</span>
				<Link passHref={true} href="/CGU">
					<span>condition générale d'utilisations</span>
				</Link>
				<Link passHref={true} href="/privacyPolicy">
					<span>politique de vie privée</span>
				</Link>
			</div>
			<div>
				<a href="#">
					<img className={styles.footerIcon} src="/svg/up.svg" title="remonter en haut de la page" alt="flèche de retour en haut de page" />
				</a>
			</div>
			<div className={styles.iconContainer}>
				<a href="">
					<img className={styles.footerIcon} alt="facebook" title="facebook" src="/svg/facebook.svg" />
				</a>
				<a href="">
					<img alt="instagram" title="instagram" className={styles.footerIcon} src="/svg/instagram.svg" />
				</a>
				<a href="">
					<img alt="youtube" title="youtube" className={styles.footerIcon} src="/svg/youtube.svg" />
				</a>
				<a href="">
					<img alt="spotify" title="spotify" className={styles.footerIcon} src="/svg/spotify.svg" />
				</a>
				<a href="">
					<img alt="deezer" title="deezer" className={styles.footerIcon} src="/svg/deezer.svg" />
				</a>
			</div>
		</footer>
	);
}
