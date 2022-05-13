import React from "react";
import styles from "../styles/GigCard.module.scss";
import { convertDate } from "../utils/convertDate";

export default function GigCard({ title, date, city, country, event, onClick }) {
	const currentDate = new Date();
	const testDate = new Date(date);

	return (
		<div
			className={
				Date.parse(testDate) < Date.parse(currentDate) ? styles.gigCardContainer : styles.gigCardContainer2
			}
		>
			<h4 style={{ fontSize: 15, marginBottom: 10 }}>{title}</h4>
			<div className={styles.infoContainer}>
				<span>{convertDate(date)}</span>
				<span>
					{city}, {country}
				</span>
			</div>
			<div className={styles.buttonContainer}>
				<a style={{ marginRight: "10%" }} target="_blank" rel="noreferrer" href={event}>
					<button className={styles.button}>accéder a l&apos;évènement</button>
				</a>

				<button className={styles.button} onClick={onClick}>
					afficher sur la carte
				</button>
			</div>
		</div>
	);
}
