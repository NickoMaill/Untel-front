import dynamic from "next/dynamic";
import React, { useState } from "react";
import styles from "../styles/Gig.module.scss";
import GigCard from "./GigCard";
import Modal from "./Modal";

const Map = dynamic(() => import("./Map"), {
	ssr: false,
});

export default function Gig({ data }) {
	const [geometry, setGeometry] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	console.log(isVisible);

	const openCloseModal = () => {
		setIsVisible(!isVisible);
	};

	const getGeometry = (index) => {
		fetch(
			`https://api.geoapify.com/v1/geocode/search?text=${data.gigs[index].address}, ${data.gigs[index].city}, ${data.gigs[index].country}&apiKey=ac8c21ac706f453b9ee59cdf882cca91`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setGeometry(res.features[0].geometry.coordinates.reverse());
				
			}).finally(() => openCloseModal())
			.catch((error) => console.error("error", error));
	};

	return (
		<div className={styles.gigContainer}>
			<div className={styles.titleContainer}>
				<h4 className={styles.gigTitle}>Prochain Concerts /</h4>
				<h4 style={{ marginLeft: 5, color: "grey" }} className={styles.gigTitle}>
					Concerts Passé
				</h4>
			</div>
			<div>
				{!data.success ? (
					<div className={styles.loader}>Loading... address</div>
				) : (
					<ul>
						<li>
							{data.gigs.map((gigData, i) => {
								return (
									<GigCard
										key={i}
										title={gigData.place}
										date={gigData.date}
										city={gigData.city}
										country={gigData.country}
										event={gigData.event_link}
										onClick={() => getGeometry(i)}
									/>
								);
							})}
						</li>
					</ul>
				)}
			</div>
				<Modal open={isVisible} onClick={() => openCloseModal()} onClick2={() => setIsVisible(true)}>
					<Map geometry={geometry} />
				</Modal>
		</div>
	);
}
