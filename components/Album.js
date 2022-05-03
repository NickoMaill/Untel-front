import React from "react";
import styles from "../styles/Album.module.scss";

export default function Album({ alt, title, src, children, year, subtitle }) {
	return (
		<div className={styles.cardContainer}>
			<img alt={alt} title={title} className={styles.imgAlbum} src={src} />
			<div className={styles.titleContainer}>
				<h3 className={styles.albumTitle}>{children}</h3>
				{subtitle.length > 0 && <h5>{subtitle}</h5>}
				<p className={styles.albumText} style={{ fontStyle: "italic" }}>
					{year}
				</p>
			</div>
			<button className={styles.albumButton}>Plus d'info</button>
		</div>
	);
}
