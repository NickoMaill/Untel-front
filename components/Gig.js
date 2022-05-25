import dynamic from "next/dynamic";
import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import GigCard from "./GigCard";
import Modal from "./Modal";

const Map = dynamic(() => import("./Map"), {
	ssr: false,
	loading: () => (
		<div style={{ width: "50wv", height: "50vh", background: "radial-gradient( #AAD3DF, #FCD6A3)" }}></div>
	),
});

export default function Gig({ data }) {
	const [geometry, setGeometry] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [currentPlace, setCurrentPlace] = useState("");
	const [currentAddress, setCurrentAddress] = useState("");
	const [isLoaded, setIsLoaded] = useState(false)

	const openCloseModal = () => {
		setIsVisible(!isVisible);

		if (isVisible === false) {
			setIsLoaded(false)
		}
	};

	const getGeometry = (index) => {
		openCloseModal();
		fetch(
			`https://api.geoapify.com/v1/geocode/search?text=${data.gigs[index].address}, ${data.gigs[index].city}, ${data.gigs[index].country}&apiKey=ac8c21ac706f453b9ee59cdf882cca91`
			)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setGeometry(res.features[0].geometry.coordinates.reverse());
				setCurrentPlace(data.gigs[index].place);
				setCurrentAddress(data.gigs[index].address + ", " + data.gigs[index].city);
				setIsLoaded(true)
			})
			.catch((error) => console.error("error", error));
	};

	return (
		<div className={styles.gigContainer}>
			<div className={styles.titleGigContainer}>
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
				<Map loaded={isLoaded} place={currentPlace} address={currentAddress} geometry={geometry} />
			</Modal>
		</div>
	);
}
