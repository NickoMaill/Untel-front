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
			</div>
			<div>
				<a href="#"><img className={styles.footerIcon} src="/icons/upArrow.png" alt="" /></a>
			</div>
			<div className={styles.iconContainer}>
				<a href="">
					<img
						className={styles.footerIcon}
						alt="facebook"
						title="facebook"
						src="/icons/facebook-white.png"
					/>
				</a>
				<a href="">
					<img
						alt="instagram"
						title="instagram"
						className={styles.footerIcon}
						src="/icons/instagram-white.png"
					/>
				</a>
				<a href="">
					<img loading="lazy" alt="youtube" title="youtube" className={styles.footerIcon} src="/icons/youtube-white.png" />
				</a>
				<a href="">
					<img loading="lazy" alt="spotify" title="spotify" className={styles.footerIcon} src="/icons/spotify-white.png" />
				</a>
				<a href="">
					<img loading="lazy" alt="deezer" title="deezer" className={styles.footerIcon} src="/icons/deezer-white.png" />
				</a>
			</div>
		</footer>
	);
}
