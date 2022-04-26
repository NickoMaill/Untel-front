import React, { useState, useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "../styles/Gig.module.scss";
import GigCard from "./GigCard";

export default function Gig({ data }) {
	const [geometry, setGeometry] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

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
		<div style={{ backgroundColor: "#fff" }}>
			<div>
				<h3>concert à venir</h3>
			</div>
			<div>
				{!data.success ? (
					<div className={styles.loader}>Loading... address</div>
				) : (
					<ul>
						{data.gigDates.map((gigData, i) => {
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
					</ul>
				)}
			</div>
			{/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>{data.gigDates[0].place}</Popup>
				</Marker>
			</MapContainer> */}
		</div>
	);
}
