import React from "react";
import styles from "../styles/Album.module.scss"

export default function Album(props) {
	return (
		<div className={styles.cardContainer}>
			<img alt={props.alt} title={props.title} className={styles.imgAlbum} src={props.src} />
			<div className={styles.titleContainer}>
				<h3 className={styles.albumTitle} >{props.children}</h3>
				<p className={styles.albumText} style={{ fontStyle: "italic" }}>{props.year}</p>
			</div>
			<button className={styles.albumButton}>Plus d'info</button>
		</div>
	);
}
