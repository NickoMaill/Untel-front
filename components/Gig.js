import React, { useState } from "react";
import styles from "../styles/Gig.module.scss";
import { convertDate } from "../utils/convertDate";
import GigCard from "./GigCard";

export default function Gig({ data }) {
	const [geometry, setGeometry] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	let customStyles;



	// if (data.length > 2) {
	// 	customStyles = {
	// 		overflowY: "scroll",
	// 		height: 300,
	// 	};
	// } else {
	// 	customStyles = {
	// 		overflowY: "hidden",
	// 		height: "auto",
	// 	};
	// }

	const getGeometry = (index) => {
		fetch(
			`https://api.geoapify.com/v1/geocode/search?text=${data.gigDates[index].address}, ${data.gigDates[index].city}, ${data.gigDates[index].country}&apiKey=ac8c21ac706f453b9ee59cdf882cca91`
		)
			.then((res) => res.json())
			.then((res) => {
				setGeometry(res.features[0].geometry.coordinates);
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div style={{ width: "30%", backgroundColor: "#fff" }}>
			<div className={styles.titleContainer}>
				<h4 className={styles.gigTitle}>Prochain Concerts /</h4>
				<h4 style={{ marginLeft: 5, color: "grey" }} className={styles.gigTitle}>
					Concerts Passé
				</h4>
			</div>
			<div style={customStyles}>
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
		</div>
	);
}
