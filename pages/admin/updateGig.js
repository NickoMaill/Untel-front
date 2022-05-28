import React from "react";
import GigSetting from "../../components/GigSetting";
import Link from "next/link";
import styles from "../../styles/AlbumSettings.module.scss"

export const getStaticProps = async () => {
	const data = await fetch("http://localhost:8000/gig_dates/", {
		method: "GET",
		mode: "cors",
		headers: {
			"Cache-Control": "max-age=10000000000000000000000",
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	}).then((res) => res.json());
	return {
		props: {
			data,
		},
	};
};

export default function updateGig({ data }) {
	return (
		<main>
			<section>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ textAlign: "center" }}>
						<h3>Bienvenue</h3>
						<h4>sur votre espace administrateur</h4>
					</div>
					<div style={{ textAlign: "center" }}>
						<p>
							Ici vous pouvez modifier certains contenue de votre site comme les photos, ajouté des albums
							ou vos prochaines dates
						</p>
						<p>
							pour tout autre changement non répertorié dans votre espace veuillez contacter le
							développeur en charge du site
						</p>
					</div>
				</div>
				<Link passHref={true} href="/admin">
					<button className={styles.button}>Revenir a votre espace admin</button>
				</Link>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h5 style={{ textAlign: "center" }}>Modifier vos albums</h5>
					{data.gigDates.map((gig, i) => {
						return (
							<GigSetting
								key={i}
								place={gig.place}
								address={gig.address}
								city={gig.city}
								country={gig.country}
								date={gig.date}
								eventLink={gig.event_link}
								requestType="PUT"
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}
