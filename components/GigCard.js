import React from "react";
import styles from "../styles/Home.module.scss";
import { convertDate } from "../utils/convertDate";

export default function GigCard({ title, date, city, country, event, onClick }) {
	const currentDate = new Date();
	const testDate = new Date(date);

	return (
		<div className={currentDate < testDate ? styles.gigCardContainer : styles.gigCardContainer2}>
			<h4 style={{ fontSize: 15, marginBottom: 10 }}>{title}</h4>
			<div className={styles.infoContainer}>
				<span>{convertDate(date)}</span>
				<span>
					{city}, {country}
				</span>
			</div>
			<div className={styles.buttonContainer}>
				<button onClick={() => window.open(event, "_blank")} className={styles.buttonGig}>
					accéder a l&apos;évènement
				</button>
				<button className={styles.buttonGig} onClick={onClick}>
					afficher sur la carte
				</button>
			</div>
		</div>
	);
}
