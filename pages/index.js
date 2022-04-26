import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Album from "../components/Album";
import Video from "../components/Video";
import Youtube from "../components/Youtube";
import Gig from "../components/Gig";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
	const gigs = await fetch("http://localhost:8000/gig_dates/", {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	}).then((res) => res.json());
	return {
		props: {
			gigs,
		},
	};
};

export default function Homepage({ gigs }) {
	return (
		<div>
			<Video source="/video/putaclic-loop.mp4" />
			<div className={styles.coloredDiv}>
				<h2 style={{ fontFamily: "LemonMilk light" }}>UNTEL</h2>
			</div>
			<section style={{ display: "flex", justifyContent: "center" }}>
				<Album
					alt="pochette de l'album Carte Blanche"
					title="Carte Blanche Vol 1"
					src="/images/carte-blanche.webp"
					year="2020"
				>
					Carte Blanche
				</Album>
				<Album alt="pochette de l'album l'impasse" title="l'impasse" src="/images/impasse.webp" year="2019">
					L &apos impasse
				</Album>
			</section>
			<section className={styles.youtubeContainer}>
				<Youtube
					title="Youtube video 'Entretien d'embauche - Untel'"
					src="https://www.youtube.com/embed/1JbqsjB4qPg"
				/>
				<Youtube title="Youtube video 'Favorable - Untel'" src="https://www.youtube.com/embed/fyi2exJt24U" />
			</section>
			<section className={styles.gigContainer}>
				<Gig data={gigs} />
			</section>
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>{data.gigDates[0].place}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
