import React, { useEffect, useState, useContext } from "react";
import Album from "../components/Album";
import Video from "../components/Video";
import Youtube from "../components/Youtube";
import Gig from "../components/Gig";
import styles from "../styles/Home.module.scss";
import PhotoGallery from "../components/PhotoGallery";
import AppContext from "../context/state";

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
	const Context = useContext(AppContext);

	return (
		<main>
			<Video source="/video/putaclic-loop.mp4" />
			<div className={styles.coloredDiv}>
				<h2 style={{ fontFamily: "LemonMilk light" }}>UNTEL</h2>
			</div>
			<section className={styles.albumContainer} style={{ display: "flex", justifyContent: "center" }}>
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
			<section>
				<PhotoGallery />
			</section>
		</main>
	);
}
