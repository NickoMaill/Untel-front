import React from "react";
import Album from "../components/Album";
import Video from "../components/Video";
import styles from "../styles/Home.module.scss";
export default function Homepage() {
	return (
		<div>
			<Video source="/video/putaclic-loop.mp4" />
			<div className={styles.coloredDiv}>
				<h2>UNTEL</h2>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Album
					alt="pochette de l'album Carte Blanche"
					title="Carte Blanche Vol 1"
					src="/images/carte-blanche.webp"
					year="2020"
				>
					Carte Blanche
				</Album>
				<Album alt="pochette de l'album l'impasse" title="l'impasse" src="/images/impasse.webp" year="2019">
					L'impasse
				</Album>
			</div>
		</div>
	);
}
