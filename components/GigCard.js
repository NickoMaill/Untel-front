import React from "react";
import styles from "../styles/GigCard.module.scss";

export default function GigCard({ title, date, city, country, event, onClick }) {
	return (
		<div className={styles.gigCardContainer}>
			<h4 style={{fontSize:15, marginBottom:10}}>{title}</h4>
			<div className={styles.infoContainer}>
				<span>{date}</span>
				<span>
					{city}, {country}
				</span>
			</div>
			<div className={styles.buttonContainer}>
				<a style={{marginRight:"10%"}} target="_blank" href={event}>
					<button className={styles.button}>accéder a l'évènement</button>
				</a>

				<button className={styles.button} onClick={onClick}>
					afficher sur la carte
				</button>
			</div>
		</div>
	);
}
